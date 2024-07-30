function preloader() {
  const imagesList = [
     "./img/hydropower.webp",
     "./img/masthead.webp",
     "./img/solarpower.webp",
     "./img/windpower.webp"
  ];
  const images = [];
  for (let i = 0; i < imagesList.length; i++) {
      images[i] = new Image();
      images[i].src = imagesList[i];
  }

 
  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[3].src}`);
};    
window.addEventListener("load", preloader);

let resources = {
    p1: {
      title: 'Hydropower',
      bodyText: 'Hydropower utilizes the energy of flowing water to generate electricity. While large-scale hydropower projects can be expensive, small-scale hydropower systems are affordable and can be an excellent solution for rural and remote areas.Small-scale hydropower systems can cost between $1,000 to $5,000 per kW of installed capacity. Large-scale projects have higher initial costs but lower LCOE, typically around $30 to $60 per MWh.',
      img: 'img/hydropower.webp',
      alt: 'An Image of Hydro Power'
    },
    p2: {
      title: 'Wind Power',
      bodyText: 'Wind power generates electricity using wind turbines. Advances in technology and increased production have significantly reduced the cost of wind energy.The cost of wind energy has decreased by about 70% over the last decade. Onshore wind farms can produce electricity at about $1,200 to $1,700 per kilowatt (kW) of capacity, with a levelized cost of electricity (LCOE) ranging from $20 to $40 per megawatt-hour (MWh).',
      img: 'img/windpower.webp',
      alt: 'An Image of wind Power'
    },
    p3: {
      title: 'Solar Power',
      bodyText: 'Solar power harnesses energy from the sun using photovoltaic (PV) panels or solar thermal systems. Over the past decade, the cost of solar panels has dropped significantly, making it one of the most affordable renewable energy sources. The cost of solar panels has decreased by more than 80% since 2010. In many regions, the cost is around $2.50 to $3.50 per watt installed, leading to a payback period of 5-10 years depending on local energy prices and incentives.',
      img: 'img/solarpower.webp',
      alt: 'An Image of solar Power'
    }
  };
  
  let buttons = document.querySelectorAll('#controls button');
  let dc = document.getElementById('dynamic-content');
  
  function selectPageButton(ev) {
    let currentButton = ev.target;
    let resource = resources[currentButton.id];
    
    buttons.forEach(button => button.classList.remove('active'));
    currentButton.classList.add('active');
    dc.innerHTML = `
      <h2>${resource.title}</h2>
      <img class="dynamic-image" src="${resource.img}" alt="${resource.alt}">
      <p>${resource.bodyText}</p>
    `;
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    let defaultResource = resources['p1'];
    dc.innerHTML = `
      <h2>${defaultResource.title}</h2>
      <img src="${defaultResource.img}" alt="${defaultResource.alt}">
      <p>${defaultResource.bodyText}</p>
    `;
  });
  
 
  buttons.forEach(button => button.addEventListener('click', selectPageButton));
  