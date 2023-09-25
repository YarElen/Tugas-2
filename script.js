//form items
const addForm = document.getElementById('addForm')
const fName = document.getElementById('fName')
const fHobby = document.getElementById('fHobby')
const fAge = document.getElementById('fAge')
const fDomicile = document.getElementById('fDomicile')
const fHeight = document.getElementById('fHeight')
const fWeight = document.getElementById('fWeight')
const UploadIMG = document.getElementById('file-upload')

let UserData = {};

// Untuk Mengedit data pada form
function EditProfile() {
    const fName = document.getElementById('fName')
    const fHobby = document.getElementById('fHobby')
    const fAge = document.getElementById('fAge')
    const fDomicile = document.getElementById('fDomicile')
    const fHeight = document.getElementById('fHeight')
    const fWeight = document.getElementById('fWeight')
    const UploadIMG = document.getElementById('file-upload')

    fName.value = UserData.Name;
    fHobby.value = UserData.Hobby;
    fAge.value = UserData.Age;
    fDomicile.value = UserData.Domicile;
    fWeight.value = UserData.Weight;
    fHeight.value = UserData.Height;
    UploadIMG.src = UserData.Image;


    const NewName = fName.value;
    const NewHobby = fHobby.value;
    const NewAge = fAge.value;
    const NewDomicile = fDomicile.value;
    const NewHeight = fHeight.value;
    const NewWeight = fWeight.value;
    const NewImage = UploadIMG.src;

// Melakukan pengambilan data yang terbaru setelah di edit
// Untuk Gambar harus di upload ulang 
    UserData = {
        Name: NewName,
        Hobby: NewHobby,
        Age: NewAge,
        Domicile: NewDomicile,
        Height: NewHeight,
        Weight: NewWeight,
        Image: NewImage,
    }

    showProfileUser();
}

// Untuk Menampilkan data yang telah diinput
function showProfileUser() {
    const showname = document.getElementById('show-name');
    const showhobby = document.getElementById('show-hobby');
    const showage = document.getElementById('show-age');
    const showdomicile = document.getElementById('show-domicile');
    const showheight = document.getElementById('show-height');
    const showweight = document.getElementById('show-weight');
    const editbtn = document.getElementById('edit-btn')
    const showImage = document.getElementById('show-image')

    editbtn.style.display = 'block';
    editbtn.addEventListener('click', EditProfile);

    showname.innerText = UserData.Name;
    showhobby.innerText = UserData.Hobby;
    showage.innerText = `Umur: ${UserData.Age} tahun`;
    showdomicile.innerText = `Domisili: ${UserData.Domicile}`;
    showheight.innerText = ` Tinggi: ${UserData.Height} cm`;
    showweight.innerText = `Berat: ${UserData.Weight} Kg`;
    showImage.src = UserData.Image;
    console.log(UserData);
}

// Menampilkan atau membaca file gambar
function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (event) {
            resolve(event.target.result);
        };

        reader.onerror = function (event) {
            reject(new Error('Gagal membaca berkas.'));
        };
        reader.readAsDataURL(file);
    });
}

// Untuk Menambahkan data pada form
async function addFormHandler(event) {
    event.preventDefault();

    const NameInput = fName.value;
    const HobbyInput = fHobby.value;
    const AgeInput = fAge.value;
    const DomicileInput = fDomicile.value;
    const HeightInput = fHeight.value;
    const WeightInput = fWeight.value;
    const imageInput = UploadIMG.files[0];
    let imageReader = '';

    if (imageInput) {
        try {
            const fileContent = await readFileAsync(imageInput);
            imageReader = fileContent;
        } catch(error) {
            console.log(`${error.name}: ${error.message}`);
        }
    }

    // Setelah data ditambahkan, akan ditampilkan sebelum showProfileUser
    const data = {
        Name: NameInput,
        Hobby: HobbyInput,
        Age: AgeInput,
        Domicile: DomicileInput,
        Height: HeightInput,
        Weight: WeightInput,
        Image: imageReader,
    }
    UserData = data;
    showProfileUser();
}
addForm.addEventListener('submit', function (event) {
    addFormHandler(event);
    addForm.reset();
});


