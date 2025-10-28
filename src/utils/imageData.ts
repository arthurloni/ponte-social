// Imagens base64 para placeholders reais
// Estas são imagens pequenas que funcionarão em qualquer ambiente

export const placeholderImages = {
  // Imagem genérica para ONGs (gradiente azul-verde)
  ngo1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(59,130,246);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(34,197,94);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad1)'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='bold'%3EONG%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EVerificada%3C/text%3E%3C/svg%3E",
  
  // Imagem para educação (gradiente roxo-azul)
  education: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(139,92,246);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(59,130,246);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad2)'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='bold'%3E📚%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EEducação%3C/text%3E%3C/svg%3E",
  
  // Imagem para alimentação (gradiente laranja-vermelho)
  food: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(249,115,22);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(239,68,68);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad3)'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='bold'%3E🍽️%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EAlimentação%3C/text%3E%3C/svg%3E",
  
  // Imagem para meio ambiente (gradiente verde)
  environment: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(34,197,94);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(16,185,129);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad4)'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='bold'%3E🌱%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EMeio Ambiente%3C/text%3E%3C/svg%3E",
  
  // Imagem para assistência social (gradiente rosa-roxo)
  social: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(236,72,153);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(168,85,247);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad5)'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='bold'%3E🤝%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EAssistência Social%3C/text%3E%3C/svg%3E",
  
  // Imagem para animais (gradiente amarelo-laranja)
  animals: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(251,191,36);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(249,115,22);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad6)'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='bold'%3E🐾%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EAnimais%3C/text%3E%3C/svg%3E",
  
  // Imagem para saúde (gradiente vermelho-rosa)
  health: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad7' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:rgb(239,68,68);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:rgb(236,72,153);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad7)'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='bold'%3E⚕️%3C/text%3E%3Ctext x='50%25' y='70%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ESaúde%3C/text%3E%3C/svg%3E",
};

export const getImageByCategory = (category: string): string => {
  const categoryMap: Record<string, string> = {
    "Educação": placeholderImages.education,
    "Alimentação": placeholderImages.food,
    "Meio Ambiente": placeholderImages.environment,
    "Assistência Social": placeholderImages.social,
    "Animais": placeholderImages.animals,
    "Saúde": placeholderImages.health,
  };
  
  return categoryMap[category] || placeholderImages.ngo1;
};

