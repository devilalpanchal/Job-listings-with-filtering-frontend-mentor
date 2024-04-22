let fetchDetails = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
    },
    {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    },
    {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Ruby"],
        "tools": ["Sass"]
    },
    {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
    },
    {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
    },
    {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
    },
    {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
    },
    {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        //   "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    }
]

const table = document.querySelector('.table');
function fetchTable(arr, container) {
    const NewArray = arr.map((item) => {
        const {
            id,
            company,
            logo,
            new: news,
            featured,
            position,
            role,
            level,
            postedAt,
            contract,
            location,
            languages,
            tools,
        } = item
        return `
        <div class="tablefirst">
        <div>
          <img src="${logo}" alt="">
        </div>
        <div class="second">
          <div class="toolname">
          <p class="Photoshop"> ${company}</p>
           ${news ? "<p class='new'>NEW!</p>" : ""}

          ${featured ? "<p class='feature'>FEATURED</p>" : ""} 
          </div >
          <div class="professionname">
          ${position}
          </div>
          <div class="timeAndPlace">
            <p>${postedAt}</p>
            <p>.</p>
            <p>${contract}</p>
            <p>.</p>
            <p>${location}</p>
          </div>
        </div >
        <div class="skillname">
            <p>${role}</p>
            <p>${level}</p>
            ${languages.length ? languages.map(lang => `<p>${lang}</p>`).join('') : ''}
            ${tools.length ? tools.map(tool => `<p>${tool}</p>`).join('') : ''}
        </div>
      </div >
        `
    })
    container.innerHTML = NewArray.join(" ")

    let tablefirst = document.querySelector('.tablefirst');
    console.log(tablefirst);
    
    if (tablefirst.firstChild) {
        // If the first child exists, add 'borderLeft' class to the tablefirst element
        console.log(tablefirst);
        tablefirst.classList.add('borderLeft');
    } else if (tablefirst.nextSibling) {
        // If the first child doesn't exist, but a sibling does, add 'borderLeft' class to the sibling
        let secondChild = tablefirst.nextSibling;
        console.log(secondChild);
        secondChild.classList.add('borderLeft');
    } else {
        // Handle the case where neither the first nor the second child exists
        console.log("No children or siblings found");
    }
    
    
    
  
}

fetchTable(fetchDetails, table)