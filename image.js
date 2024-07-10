// Taken and adapted from
// https://www.youtube.com/watch?v=QghhoJBdw7A
// Credits to Mr. Web Designer

let indexy = -1;

document.querySelectorAll('.image-container img').forEach(image =>
{
  image.onclick = () =>
  {
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
    indexy = Number(image.getAttribute('index'));
    document.querySelector('.popup-caption').textContent = image.getAttribute('alt');
    document.querySelector('.navbar').style.display = 'none';
  }
});

document.querySelector('.popup-image .close').onclick = () =>
{
    document.querySelector('.popup-image').style.display = 'none';
    document.querySelector('.navbar').style.display = 'block';
    indexy = -1;
}

document.querySelector('.popup-image .prev').onclick = () =>
{
  let current_image = document.querySelector('.popup-image img');
  let all_images = document.querySelectorAll('.image-container img');

  if (indexy == 0)
  {
    indexy = all_images.length - 1;
  }
  else
  {
    indexy = indexy - 1;
  }

  document.querySelector('.popup-image img').src = all_images[indexy].getAttribute('src');
  document.querySelector('.popup-caption').textContent = all_images[indexy].getAttribute('alt');
}

document.querySelector('.popup-image .next').onclick = () =>
{
  let current_image = document.querySelector('.popup-image img');
  let all_images = document.querySelectorAll('.image-container img');

  if (indexy == all_images.length - 1)
  {
    indexy = 0;
  }
  else
  {
    indexy = indexy + 1;
  }

  document.querySelector('.popup-image img').src = all_images[indexy].getAttribute('src');
  document.querySelector('.popup-caption').textContent = all_images[indexy].getAttribute('alt');
}

document.body.addEventListener('keydown', function(event)
{
  if (indexy == -1)
  {
    return;
  }

  const key = event.key;
  if (key === "ArrowLeft")
  {
    let current_image = document.querySelector('.popup-image img');
    let all_images = document.querySelectorAll('.image-container img');

    if (indexy == 0)
    {
      indexy = all_images.length - 1;
    }
    else
    {
      indexy = indexy - 1;
    }

    document.querySelector('.popup-image img').src = all_images[indexy].getAttribute('src');
    document.querySelector('.popup-caption').textContent = all_images[indexy].getAttribute('alt');
  }
  else if (key == "ArrowRight")
  {
    let current_image = document.querySelector('.popup-image img');
    let all_images = document.querySelectorAll('.image-container img');

    if (indexy == all_images.length - 1)
    {
      indexy = 0;
    }
    else
    {
      indexy = indexy + 1;
    }

    document.querySelector('.popup-image img').src = all_images[indexy].getAttribute('src');
    document.querySelector('.popup-caption').textContent = all_images[indexy].getAttribute('alt');
  }
});
