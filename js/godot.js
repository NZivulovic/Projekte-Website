
// Projekt Selector navBar

function navBarSelector(targetId) {

  document.querySelectorAll('.projektContainer').forEach(el => {
    el.style.display = 'none';
  });


  const targetElement = document.getElementById(targetId);


  if (targetElement) {
    targetElement.style.display = 'block';
  }
}

{
  let newImg;
  let newestImg;

  function switchPreview(targetId) {
    let vid = document.getElementById("videoProjekt1");
    let img = document.getElementById(`${targetId}`);



    if (vid != null) {

      vid.replaceWith(newImg = new (Image));
      newImg.src = `${img.src}`;

      newImg.style.display = 'block';
      newImg.style.marginLeft = 'auto';
      newImg.style.marginRight = 'auto';
      newImg.style.width = '50%';
      newImg.style.border = '2px solid white';



    }

    if (vid == null) {
      newImg.replaceWith(newestImg = newImg);
      newestImg.src = `${img.src}`;

      newestImg.style.display = 'block';
      newestImg.style.marginLeft = 'auto';
      newestImg.style.marginRight = 'auto';
      newestImg.style.width = '50%';
      newestImg.style.border = '2px solid white';


    }

  }
}
