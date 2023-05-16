const hamIcon = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

hamIcon.addEventListener('click', () => {
  hamIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    hamIcon.classList.remove('active');
  });
});

const specializedDoctor = [{
  doctorName: 'Dr.Lewi ',
  doctorImage: 'Asset/Doctors/julia.png',
  doctorSpecialize: {
    specialized: 'Dr. Lewi is a skilled pediatrician who is dedicated to providing compassionate care for children.',
    workingTime: '8:00 am - 12:00 pm',
  },
},
{
  doctorName: 'Dr.Genanaw ',
  doctorImage: 'Asset/Doctors/kilnam.png',
  doctorSpecialize: {
    specialized: 'Dr. Genanaw is a dedicated orthopedic surgeon who specializes in treating bone and joint conditions. With 20+ years expertise.',
    workingTime: '1:00 pm - 06:00 pm',
  },
},
{
  doctorName: 'Dr.Sara ',
  doctorImage: 'Asset/Doctors/lila.png',
  doctorSpecialize: {
    specialized: 'Dr. Sara is a skilled dermatologist who specializes in treating skin conditions. With her knowledge and experience.',
    workingTime: '8:00 am - 12:00 pm',
  },
},
{
  doctorName: 'Dr.Robel ',
  doctorImage: 'Asset/Doctors/reagan.png',
  doctorSpecialize: {
    specialized: 'Dr. Robel is a dedicated pulmonologist who specializes in treating lung and respiratory conditions. With his expertise and experience',
    workingTime: '1:00 pm - 06:00 pm',
  },
},
{
  doctorName: 'Dr.Louia ',
  doctorImage: 'Asset/Doctors/sohyeong.png',
  doctorSpecialize: {
    specialized: 'Dr. Louia is a skilled surgeon who provides expert care for her patients. With her extensive training.',
    workingTime: '1:00 pm - 06:00 pm',
  },
},
{
  doctorName: 'Dr.Kebede ',
  doctorImage: 'Asset/Doctors/yochai.png',
  doctorSpecialize: {
    specialized: 'Dr. Kebede is a dedicated cardiologist who specializes in treating heart and cardiovascular conditions.',
    workingTime: '8:00 am - 12:00 pm',
  },
},
];

const container = document.getElementById('doctors-container');

// Function to show the doctors
function showDoctors() {
  specializedDoctor.forEach((doctor, i) => {
    const doctorDiv = document.createElement('div');

    doctorDiv.classList.add('doctor');
    if (i >= 2) {
      doctorDiv.classList.add('hide');
      doctorDiv.classList.add('show_and_hide');
    }
    doctorDiv.style.backgroundImage = `url(${doctor.doctorImage})`;

    // Create a heading element for the doctor's name
    const nameHeading = document.createElement('h2');
    nameHeading.textContent = doctor.doctorName;

    // Create a paragraph element for the doctor's specialization
    const specializationParagraph = document.createElement('p');
    specializationParagraph.textContent = doctor.doctorSpecialize.specialized;

    // Create a h3 element for the doctor's time
    const doctorsTime = document.createElement('h3');
    doctorsTime.textContent = doctor.doctorSpecialize.workingTime;

    // Add the name, specialization, and time elements to the doctor div
    doctorDiv.appendChild(nameHeading);
    doctorDiv.appendChild(specializationParagraph);
    doctorDiv.appendChild(doctorsTime);

    // Add the doctor div to the container element
    container.appendChild(doctorDiv);
  });
}

showDoctors();
