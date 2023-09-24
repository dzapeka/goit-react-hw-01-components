export default function getRandomHexColor() {
  const getRandomComponent = () => Math.floor(Math.random() * 184);
  const toHex = component => component.toString(16).padStart(2, '0');

  const red = getRandomComponent();
  const green = getRandomComponent();
  const blue = getRandomComponent();

  const hexColor = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;

  return hexColor;
}
