let registeredUser = null;

export const setRegisteredUser = (user) => {
  registeredUser = user;
};

export const getRegisteredUser = () => {
  return registeredUser;
};
