export const hideEmail = (email: string | null | undefined) => {
  if (!email) return email;
  const mail = email.split('@');
  const stars = mail[0].replace(/[\s\S]/g, '*');
  const result = `${stars}@${mail[1]}`;
  return result;
};
