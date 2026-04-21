function goToSection(elementId: string) {
  document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });
}

export default goToSection;