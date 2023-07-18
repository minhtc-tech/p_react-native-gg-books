const generalTheme = {
  primary: '#4F98CA',
  primaryBlur: 'rgba(79, 152, 202, 0.05)',
  border: '#4F98CA',
  white: '#FFF',
  grayText: '#9D9D9D',
  blurGray: 'rgba(196, 196, 196, 0.15)',
  lightGray: '#C4C4C4',
  shadowColor: 'rgb(6, 7, 13)',
  overlay: '#4F98CAaa'
};
export const lightTheme = {
  dark: false,
  colors: {
    ...generalTheme,
    background: '#F8F9FA',
    card: '#FFF',
    text: '#19191B',
  }
};

export const darkTheme = {
  dark: false,
  colors: {
    ...generalTheme,
    background: '#19191B',
    card: '#000',
    text: '#fff',
  }
};