import { jsPDF } from "jspdf";
import { personalInfo, experiences, certifications, projects, socialLinks } from "@/data/portfolio";

export function generateResumePDF() {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let yPos = margin;

  const addText = (text: string, x: number, size: number, style: "normal" | "bold" = "normal", color: [number, number, number] = [33, 33, 33]) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", style);
    doc.setTextColor(...color);
    doc.text(text, x, yPos);
  };

  const addWrappedText = (text: string, x: number, maxWidth: number, size: number, style: "normal" | "bold" = "normal", color: [number, number, number] = [66, 66, 66]) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", style);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, yPos);
    return lines.length;
  };

  const addSectionHeader = (title: string) => {
    yPos += 8;
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(0.5);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 6;
    addText(title.toUpperCase(), margin, 11, "bold", [59, 130, 246]);
    yPos += 8;
  };

  const checkPageBreak = (spaceNeeded: number) => {
    if (yPos + spaceNeeded > doc.internal.pageSize.getHeight() - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  addText(personalInfo.name, margin, 24, "bold", [33, 33, 33]);
  yPos += 8;
  addText(personalInfo.tagline, margin, 12, "normal", [100, 100, 100]);
  yPos += 6;

  const contactInfo = [];
  if (socialLinks.email) contactInfo.push(socialLinks.email);
  if (socialLinks.phone) contactInfo.push(socialLinks.phone);
  if (socialLinks.linkedin) contactInfo.push(socialLinks.linkedin.replace("https://", ""));
  if (socialLinks.github) contactInfo.push(socialLinks.github.replace("https://", ""));

  if (contactInfo.length > 0) {
    addText(contactInfo.join("  |  "), margin, 9, "normal", [100, 100, 100]);
    yPos += 6;
  }

  addSectionHeader("Professional Summary");
  const summaryLines = addWrappedText(personalInfo.about.background, margin, contentWidth, 10);
  yPos += summaryLines * 5;

  addSectionHeader("Work Experience");
  experiences.forEach((exp) => {
    checkPageBreak(40);
    
    addText(exp.role, margin, 11, "bold");
    yPos += 5;
    addText(`${exp.company} | ${exp.startDate} - ${exp.endDate}`, margin, 10, "normal", [100, 100, 100]);
    yPos += 5;

    exp.responsibilities.slice(0, 3).forEach((resp) => {
      checkPageBreak(10);
      const respLines = addWrappedText(`• ${resp}`, margin + 2, contentWidth - 4, 9);
      yPos += respLines * 4 + 1;
    });

    if (exp.achievements.length > 0) {
      yPos += 2;
      addText("Key Achievements:", margin + 2, 9, "bold", [59, 130, 246]);
      yPos += 4;
      exp.achievements.slice(0, 2).forEach((ach) => {
        checkPageBreak(8);
        const achLines = addWrappedText(`• ${ach}`, margin + 4, contentWidth - 6, 9);
        yPos += achLines * 4 + 1;
      });
    }
    yPos += 4;
  });

  addSectionHeader("Skills & Technologies");
  const allTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies)));
  const skillsText = allTechnologies.slice(0, 15).join("  •  ");
  const skillsLines = addWrappedText(skillsText, margin, contentWidth, 10);
  yPos += skillsLines * 5;

  addSectionHeader("Certifications");
  const certsPerRow = 2;
  const certWidth = (contentWidth - 10) / certsPerRow;
  
  for (let i = 0; i < certifications.length; i += certsPerRow) {
    checkPageBreak(15);
    for (let j = 0; j < certsPerRow && i + j < certifications.length; j++) {
      const cert = certifications[i + j];
      const xOffset = margin + j * (certWidth + 10);
      addText(cert.name, xOffset, 10, "bold");
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 100, 100);
      doc.text(`${cert.provider} (${cert.year})`, xOffset, yPos + 4);
    }
    yPos += 12;
  }

  addSectionHeader("Notable Projects");
  projects.slice(0, 3).forEach((project) => {
    checkPageBreak(20);
    addText(project.title, margin, 10, "bold");
    yPos += 4;
    const projLines = addWrappedText(project.description, margin, contentWidth, 9);
    yPos += projLines * 4 + 2;
    addText(`Technologies: ${project.technologies.slice(0, 5).join(", ")}`, margin, 8, "normal", [100, 100, 100]);
    yPos += 6;
  });

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Page ${i} of ${pageCount}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: "center" }
    );
  }

  doc.save(`${personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`);
}
