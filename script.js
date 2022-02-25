// scroll to top
window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('active', window.scrollY > 300)
  })
  
  document.querySelector('.scrollTop').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
    })
  })
  
  window.onload = function () {
    window.scrollTo({
      top: 0,
    })
  }
  
  let data = [
    {
      project_image: 'Project-Portfolio.png',
      project_name: 'Personal portfolio',
      project_live: 'https://mahiranjan.github.io/Personal-Portfolio/',
      project_repo: 'https://github.com/MahiranjaN/Personal-Portfolio',
    },
    {
      project_image: 'Project_To_Do_Web_App.png',
      project_name: 'To-do Web App',
      project_live: 'https://mahiranjan.github.io/To-Do-Web-App/',
      project_repo: 'https://github.com/MahiranjaN/To-Do-Web-App',
    },
    {
      project_image: 'Project_Scientific_Calci.png',
      project_name: 'Scientific Calculator',
      project_live: 'https://mahiranjan.github.io/Scientific-Calculator/',
      project_repo: 'https://github.com/MahiranjaN/Scientific-Calculator',
    },
    {
      project_image: 'project_Bill_Splitter.png',
      project_name: 'Bill Splitter',
      project_live: 'https://mahiranjan.github.io/Bill-Splitter/',
      project_repo: 'https://github.com/MahiranjaN/Bill-Splitter',
    },
    {
      project_image: 'Project_Flip_the_coin.png',
      project_name: 'Toss the Coin',
      project_live: 'https://mahiranjan.github.io/Coin-Toss/',
      project_repo: 'https://github.com/MahiranjaN/Coin-Toss',
    
    },
    {
      project_image: 'Project_Crazy_Cuisine.png',
      project_name: 'Crazy Cuisine',
      project_live: 'https://mahiranjan.github.io/Crazy-Cuisine/',
      project_repo: 'https://github.com/MahiranjaN/Crazy-Cuisine',
    },
    {
      project_image: 'Project_Advice_generator.png',
      project_name: 'Advice Generator',
      project_live: 'https://mahiranjan.github.io/Advice-Generator/',
      project_repo: 'https://github.com/MahiranjaN/Advice-Generator',
    },
    {
      project_image: 'Project_Tic-Tac-Toe.png',
      project_name: 'Tic-Tac-Toe',
      project_live: 'https://mahiranjan.github.io/Tic-Tac-Toe/',
      project_repo: 'https://github.com/MahiranjaN/Tic-Tac-Toe',
    },
    
  ]
  
  // loading the projects
  const projectsList = document.querySelector('.projects-list')
  
  data.forEach((d) => {
    projectsList.innerHTML += `
    <div class="project-card">
    ${
      d.react
        ? `<div class="react-label"><img src="images/icons/react-js.svg" alt="react-icon"></img></div>`
        : ''
    }
    <div class="project-img">
        <img src=${d.project_image} alt="project-img">
    </div>
    <div class="project-info">
        <h3>${d.project_name}</h3>
        <div class="links">
            <a href=${d.project_live} target="_blank" class="url">
            <img src="link.png" alt="link">
        </a>
        <a href=${d.project_repo} target="_blank" class="code">
            <img src="coding.png" alt="code">
        </a>
        </div>
    </div>
  </div>
    `
  })