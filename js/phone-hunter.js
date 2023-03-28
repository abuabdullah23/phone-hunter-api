const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, dataLimit); // 2nd data is array of phone data. phones load from 2nd data.
}

const displayPhone = (phones, dataLimit) => {
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerText = '';

    // button show when phone length > 8
    const showAllBtn = document.getElementById('btn-show-all');
    if (dataLimit && phones.length > 8) {
        phones = phones.slice(0, 8);
        showAllBtn.classList.remove('d-none');
    } else {
        showAllBtn.classList.add('d-none');
    }

    // // display 8 phone
    // phones = phones.slice(0, 8);

    // display no phone
    const noFoundPhone = document.getElementById('no-found-message');
    if (phones.length === 0) {
        noFoundPhone.classList.remove('d-none');
    } else {
        noFoundPhone.classList.add('d-none');
    }

    // display all phone
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
    <div class="card p-3">
        <div class="justify-content-between">
            <img class="img-fluid w-100 rounded" src="${phone.image}" class="card-img-top" alt="..."> 
            <div class="d-flex align-items-center">
                <div class="text-start p-3 align-items-center">
                    <h6 class="fs-5">Brand: ${phone.brand}</h6>
                    <h5 class="fw-bold fs-5">${phone.phone_name}</h5>
                    <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn text-primary fw-bold fs-5" data-bs-toggle="modal" data-bs-target="#phone-details">
                    <u>View Details</u>
                    </button>
                </div>
            </div>
        </div>
    </div> 
    `;
        phonesContainer.appendChild(phoneDiv);

        // console.log(phone);
    });
    // stop loader // call from toggleSpinner Function
    toggleSpinner(false);
}


// common function for btn search and show all button
const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

// for search btn
document.getElementById('btn-search').addEventListener('click', function () {
    // start loader // call from function
    /* toggleSpinner(true);
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    loadPhones(searchText); */
    processSearch(8);
});

// for enter event handler
document.getElementById('input-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(8);
    }
});

// handler show all products. it is not best way
document.getElementById('show-button-all').addEventListener('click', function () {
    processSearch();
});

// loader function
const toggleSpinner = isLoading => {
    const loadingSection = document.getElementById('loader');
    if (isLoading) {
        loadingSection.classList.remove('d-none');
    } else {
        loadingSection.classList.add('d-none');
    }
}

// for phone details
const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone =>{
    const modalTitle = document.getElementById('phone-details-title');
    modalTitle.innerText = phone.name;
    const phoneDetailsModal = document.getElementById('phone-details-modal');
  
    phoneDetailsModal.innerHTML = `
    <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'not Found Details'} </p>
    <p>Bluetooth: ${phone.others ? phone.others.Bluetooth : 'not Bluetooth'} </p>
    <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'Storage not Found'} </p>
    <p>Sensors: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors.slice(0, 5) : 'sensors not Found'} </p>
    `;
}


loadPhones('iphone');