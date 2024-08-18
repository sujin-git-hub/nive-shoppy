import axios from "axios";


const productionUrl = 'https://strapi-store-server.onrender.com/api';

const customFeatch = axios.create({
    baseURL : productionUrl,
}) 

export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100).toFixed(2));
    return dollarsAmount;
  };

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};

export const magnifi = () => {
  let box = event?.target;
  if (!box) return;
  if (box.nodeName == "IMG" || box.className == "large_magnifi") {
    box = box.nodeName == "IMG" ? box : box.nextElementSibling;
  }
  
  var imageURL = box.getAttribute('src');
  
  let image_object = new Image();
  image_object.src = imageURL;
  let native_width = image_object.width;
  let native_height = image_object.height;
  var magnify_offset = box.parentElement.getBoundingClientRect();
  var mx = event.pageX - (magnify_offset.left + box.offsetLeft);
  var my = event.pageY - (magnify_offset.top + box.offsetTop);
  let large = document.getElementsByClassName("large_magnifi")[0];
  if (mx < box.width && my < box.height && mx > 0 && my > 0) {
    large.style.display = 'block';
  } else {
    large.style.display = 'none';
  }
  if (large.style.display == 'block') {
    var rx =
    Math.round((mx / box.width) * native_width - 100/2) * -1;
    var ry =
    Math.round((my / box.height) * native_height - 100/2) * -1;
    var bgp = rx + "px " + ry + "px";
    
    var px = (mx + box.offsetLeft) - 100 / 2;
    var py = (my + box.offsetTop) - 100 / 2;
    large.style.background = `transparent url("${imageURL}") no-repeat`;
    large.style.left = px + 'px';
    large.style.top = py + 'px';
    large.style.backgroundPosition = bgp;
  }
  //}
}

export default customFeatch;