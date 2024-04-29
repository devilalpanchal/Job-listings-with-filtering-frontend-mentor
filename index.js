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
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    }
]
let languages
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
            <p class="roles">${role}</p>
            <p class="levels">${level}</p>
            ${languages.length ? languages.map(lang => `<p class="language">${lang}</p>`).join('') : ''}
            ${tools.length ? tools.map(tool => `<p  class="tolls" >${tool}</p>`).join('') : ''}
        </div>
      </div >
        `
    })
    container.innerHTML = NewArray.join(" ")
    let adddance = document.querySelector('.adddance')

    // to language
    const languageTags = document.querySelectorAll('.language');
    languageTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const selectedLanguage = tag.textContent;
            filterByLanguage(selectedLanguage);
            adddance.textContent = tag.textContent
        });
    })

    // to roles
    const rolesname = document.querySelectorAll('.roles');
    rolesname.forEach(tag1 => {
        tag1.addEventListener('click', () => {
            const selectedrole = tag1.textContent;
            filterByRole(selectedrole);
            adddance.textContent = tag1.textContent

        });
    })

    // to levels
    const levelname = document.querySelectorAll('.levels');
    levelname.forEach(tag => {
        tag.addEventListener('click', () => {
            const selectedlevel = tag.textContent;
            filterByLevel(selectedlevel);
            adddance.textContent = tag.textContent


        });
    })


    // to tools
    const toolname = document.querySelectorAll('.tolls');
    toolname.forEach(tag => {
        tag.addEventListener('click', () => {
            const selectedtools = tag.textContent;
            filterByTools(selectedtools);
            adddance.textContent = tag.textContent

        });
    })

    let tablefirst = document.querySelector('.tablefirst');
    if (tablefirst.firstChild) {
        tablefirst.classList.add('borderLeft');
    } else if (tablefirst.nextSibling) {
        let secondChild = tablefirst.nextSibling;
        console.log(secondChild);
        secondChild.classList.add('borderLeft');
    } else {
        console.log("No children or siblings found");
    }

}
function filterByLanguage(language) {
    const newArray = fetchDetails.filter(item => item.languages.includes(language));
    fetchTable(newArray, table);
    addAndFilter()

}
function filterByTools(tool) {
    const newArray = fetchDetails.filter(item => item.tools.includes(tool));
    fetchTable(newArray, table);
    addAndFilter()
}
fetchTable(fetchDetails, table)
function filterByRole(role) {
    const newArray = fetchDetails.filter(item => item.role === role);
    fetchTable(newArray, table);
    addAndFilter()
}
fetchTable(fetchDetails, table);
function filterByLevel(level) {
    const newArray = fetchDetails.filter(item => item.level === level);
    fetchTable(newArray, table);
    addAndFilter()
}
fetchTable(fetchDetails, table);



function addAndFilter() {
    console.log("devilal")
    let filterheader = document.querySelector('.filter')
    const selectvalue = document.createElement('div')
    selectvalue.classList.add('adddance')
    selectvalue.style.width = " 120px"
    selectvalue.style.height = " 50px"
    selectvalue.style.padding = " 15px"
    selectvalue.style.textAlign = " center"
    selectvalue.style.borderRadius = " 5px 0px 0px 5px"
    selectvalue.style.backgroundColor = "hsl(180, 52%, 96%)"
    selectvalue.style.fontSize = "18px"
    selectvalue.style.color = "hsl(180, 29%, 50%)"
    // selectvalue.innerText = 'devilal '

    let remove = document.createElement('div')
    remove.style.backgroundColor = "hsl(180, 29%, 50%)"
    remove.innerText = " x"
    remove.style.width = "3%"
    remove.style.height = "50px"
    remove.style.textAlign = "center"
    remove.style.fontSize = "25px"
    remove.style.borderRadius = " 0px 5px 5px 0px"
    remove.style.color = "white"
    remove.style.padding = "11px"
    remove.style.marginRight = "15px"
    filterheader.appendChild(selectvalue)
    filterheader.append(remove)
    remove.addEventListener("click", () => {
        remove.classList.toggle('hide')
        selectvalue.classList.toggle('hide')
        console.log("derfjsafjlsd")
    })
}
