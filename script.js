const eMails = document.querySelectorAll(".mail");
const mailWrappers = document.querySelectorAll(".mail-wrapper");
const envelopeTop = document.querySelector(".envelope.top");
const envelopesBlue = document.querySelectorAll(".envelope.blue");
const envelopesRed = document.querySelectorAll(".envelope.red");

const instaIcons = document.querySelectorAll(".insta-icon");
const instaIconsRed = document.querySelectorAll(".insta-icon.red");
const instaIconsBlue = document.querySelectorAll(".insta-icon.blue");

const vimeoIcons = document.querySelectorAll(".vimeo-icon");
const vimeoIconsRed = document.querySelectorAll(".vimeo-icon.red");
const vimeoIconsBlue = document.querySelectorAll(".vimeo-icon.blue");

const behanceIcons = document.querySelectorAll(".behance-icon");
const behanceIconsRed = document.querySelectorAll(".behance-icon.red");
const behanceIconsBlue = document.querySelectorAll(".behance-icon.blue");

const illustrationH2 = document.querySelector(".illustration-wrapper h2");
const illustrationLink = document.querySelector(".illustration-wrapper");

const motionWrapperH2 = document.querySelector(".motion-wrapper h2");
const motionWrapperLink = document.querySelector(".motion-wrapper");

// var computedH2FontSize = window.getComputedStyle(document.querySelector(".motion-wrapper h2")).fontSize;
// console.log(computedH2FontSize);
// const fsz = parseInt(computedH2FontSize, 10);

// function fontIn(e) {
//  const newFSZ = fsz * 1.15;
//  if (e.target === motionWrapperLink) {
//   motionWrapperH2.style.fontSize = `${newFSZ}px`;
//  } else {
//   illustrationH2.style.fontSize = `${newFSZ}px`;
//  }
// }

// function fontOut(e) {
//  if (e.target === motionWrapperLink)
//   motionWrapperH2.style.fontSize = computedH2FontSize;
//  else illustrationH2.style.fontSize = computedH2FontSize;
// }

motionWrapperLink.addEventListener("mouseover", fontIn);
motionWrapperLink.addEventListener("mouseout", fontOut);
illustrationLink.addEventListener("mouseover", fontIn);
illustrationLink.addEventListener("mouseout", fontOut);


mailWrappers.forEach(mailWrapper => {
 mailWrapper.addEventListener("mouseover", function () {
  eMails.forEach(eMail => eMail.style.color = "#FF3333");
  envelopesBlue.forEach(envelopeBlue => envelopeBlue.style.opacity = "0");
  envelopesRed.forEach(envelopeBlue => envelopeBlue.style.opacity = "1");
 })
})
mailWrappers.forEach(mailWrapper => {
 mailWrapper.addEventListener("mouseout", function () {
  eMails.forEach(eMail => eMail.style.color = "#0000FF");
  envelopesBlue.forEach(envelopeBlue => envelopeBlue.style.opacity = "1");
  envelopesRed.forEach(envelopeBlue => envelopeBlue.style.opacity = "0");
 })
})

instaIcons.forEach(instaIcon => instaIcon.addEventListener("mouseover", function () {
 instaIconsBlue.forEach(instaIconBlue => instaIconBlue.style.opacity = "0");
 instaIconsRed.forEach(instaIconRed => instaIconRed.style.opacity = "1");
}))

instaIcons.forEach(instaIcon => instaIcon.addEventListener("mouseout", function () {
 instaIconsBlue.forEach(instaIconBlue => instaIconBlue.style.opacity = "1");
 instaIconsRed.forEach(instaIconRed => instaIconRed.style.opacity = "0");
}))

vimeoIcons.forEach(vimeoIcon => vimeoIcon.addEventListener("mouseover", function () {
 vimeoIconsBlue.forEach(vimeoIconBlue => vimeoIconBlue.style.opacity = "0");
 vimeoIconsRed.forEach(vimeoIconRed => vimeoIconRed.style.opacity = "1");
}))

vimeoIcons.forEach(vimeoIcon => vimeoIcon.addEventListener("mouseout", function () {
 vimeoIconsBlue.forEach(vimeoIconBlue => vimeoIconBlue.style.opacity = "1");
 vimeoIconsRed.forEach(vimeoIconRed => vimeoIconRed.style.opacity = "0");
}))

behanceIcons.forEach(behanceIcon => behanceIcon.addEventListener("mouseover", function () {
 behanceIconsBlue.forEach(behanceIconBlue => behanceIconBlue.style.opacity = "0");
 behanceIconsRed.forEach(behanceIconRed => behanceIconRed.style.opacity = "1");
}))

behanceIcons.forEach(behanceIcon => behanceIcon.addEventListener("mouseout", function () {
 behanceIconsBlue.forEach(behanceIconBlue => behanceIconBlue.style.opacity = "1");
 behanceIconsRed.forEach(behanceIconRed => behanceIconRed.style.opacity = "0");
}))