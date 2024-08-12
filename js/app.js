<!-- //💡In the Beginning, PaPaGuy wrote beautiful Codes < /> 💜❤️ // -->
class LicenseGenerator {
    constructor() {
        this.states = {
            'AL': 'Alabama',
            'AK': 'Alaska',
            'AZ': 'Arizona',
            'AR': 'Arkansas',
            'CA': 'California',
            'CO': 'Colorado',
            'CT': 'Connecticut',
            'DE': 'Delaware',
            'FL': 'Florida',
            'GA': 'Georgia',
            'HI': 'Hawaii',
            'ID': 'Idaho',
            'IL': 'Illinois',
            'IN': 'Indiana',
            'IA': 'Iowa',
            'KS': 'Kansas',
            'KY': 'Kentucky',
            'LA': 'Louisiana',
            'ME': 'Maine',
            'MD': 'Maryland',
            'MA': 'Massachusetts',
            'MI': 'Michigan',
            'MN': 'Minnesota',
            'MS': 'Mississippi',
            'MO': 'Missouri',
            'MT': 'Montana',
            'NE': 'Nebraska',
            'NV': 'Nevada',
            'NH': 'New Hampshire',
            'NJ': 'New Jersey',
            'NM': 'New Mexico',
            'NY': 'New York',
            'NC': 'North Carolina',
            'ND': 'North Dakota',
            'OH': 'Ohio',
            'OK': 'Oklahoma',
            'OR': 'Oregon',
            'PA': 'Pennsylvania',
            'RI': 'Rhode Island',
            'SC': 'South Carolina',
            'SD': 'South Dakota',
            'TN': 'Tennessee',
            'TX': 'Texas',
            'UT': 'Utah',
            'VT': 'Vermont',
            'VA': 'Virginia',
            'WA': 'Washington',
            'WV': 'West Virginia',
            'WI': 'Wisconsin',
            'WY': 'Wyoming',
            'DC': 'District of Columbia'
        };
        this.init();
    }

    init() {
        document.getElementById('generateBtn').addEventListener('click', () => this.generateLicense());
        document.getElementById('validateBtn').addEventListener('click', () => this.validateLicense());
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
    }

    generateLicense() {
        const state = document.getElementById('state').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        
        const licenseNumber = this.generateLicenseNumber(state, firstName, lastName);
        document.getElementById('licenseNumber').value = licenseNumber;
        this.generateBarcode(licenseNumber);

        document.getElementById('downloadBtn').style.display = 'block';
    }

    validateLicense() {
        const licenseNumber = document.getElementById('licenseNumber').value;
        const state = document.getElementById('state').value;

        const valid = this.validateLicenseNumber(state, licenseNumber);
        if (valid) {
            alert('License number is valid!');
        } else {
            alert('License number is invalid!');
        }
    }

    generateLicenseNumber(state, firstName, lastName) {
        const randomNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

        switch (state) {
            case 'AL': return `AL${lastName.slice(0, 3)}${dob.slice(2, 4)}${randomNumber}`;
            case 'AK': return `AK${lastName.slice(0, 5)}${dob.slice(4, 8)}`;
            case 'AZ': return `AZ${lastName.slice(0, 1)}${dob.slice(2, 4)}${randomNumber}`;
            case 'AR': return `AR${lastName.slice(0, 4)}${dob.slice(0, 2)}${randomNumber}`;
            case 'CA': return `CA${lastName.slice(0, 5)}${dob.slice(2, 4)}${randomNumber}`;
            case 'CO': return `CO${lastName.slice(0, 3)}${dob.slice(4, 8)}${randomNumber}`;
            case 'CT': return `CT${lastName.slice(0, 3)}${dob.slice(2, 4)}${randomNumber}`;
            case 'DE': return `DE${lastName.slice(0, 3)}${dob.slice(4, 8)}${randomNumber}`;
            case 'FL': return `FL${lastName.slice(0, 5)}${dob.slice(2, 4)}${randomNumber}`;
            case 'GA': return `GA${lastName.slice(0, 6)}${dob.slice(4, 8)}${randomNumber}`;
            case 'HI': return `HI${lastName.slice(0, 3)}${dob.slice(0, 2)}${randomNumber}`;
            case 'ID': return `ID${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'IL': return `IL${lastName.slice(0, 5)}${dob.slice(4, 8)}${randomNumber}`;
            case 'IN': return `IN${lastName.slice(0, 4)}${dob.slice(0, 2)}${randomNumber}`;
            case 'IA': return `IA${lastName.slice(0, 3)}${dob.slice(4, 8)}${randomNumber}`;
            case 'KS': return `KS${lastName.slice(0, 5)}${dob.slice(4, 8)}${randomNumber}`;
            case 'KY': return `KY${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'LA': return `LA${lastName.slice(0, 4)}${dob.slice(2, 4)}${randomNumber}`;
            case 'ME': return `ME${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'MD': return `MD${lastName.slice(0, 4)}${dob.slice(2, 4)}${randomNumber}`;
            case 'MA': return `MA${lastName.slice(0, 3)}${dob.slice(4, 8)}${randomNumber}`;
            case 'MI': return `MI${lastName.slice(0, 5)}${dob.slice(0, 2)}${randomNumber}`;
            case 'MN': return `MN${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'MS': return `MS${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'MO': return `MO${lastName.slice(0, 5)}${dob.slice(0, 2)}${randomNumber}`;
            case 'MT': return `MT${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'NE': return `NE${lastName.slice(0, 4)}${dob.slice(2, 4)}${randomNumber}`;
            case 'NV': return `NV${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'NH': return `NH${lastName.slice(0, 4)}${dob.slice(0, 2)}${randomNumber}`;
            case 'NJ': return `NJ${lastName.slice(0, 5)}${dob.slice(4, 8)}${randomNumber}`;
            case 'NM': return `NM${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'NY': return `NY${lastName.slice(0, 3)}${dob.slice(2, 4)}${randomNumber}`;
            case 'NC': return `NC${lastName.slice(0, 4)}${dob.slice(0, 2)}${randomNumber}`;
            case 'ND': return `ND${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'OH': return `OH${lastName.slice(0, 4)}${dob.slice(2, 4)}${randomNumber}`;
            case 'OK': return `OK${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'OR': return `OR${lastName.slice(0, 4)}${dob.slice(0, 2)}${randomNumber}`;
            case 'PA': return `PA${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'RI': return `RI${lastName.slice(0, 3)}${dob.slice(4, 8)}${randomNumber}`;
            case 'SC': return `SC${lastName.slice(0, 5)}${dob.slice(0, 2)}${randomNumber}`;
            case 'SD': return `SD${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'TN': return `TN${lastName.slice(0, 4)}${dob.slice(2, 4)}${randomNumber}`;
            case 'TX': return `TX${lastName.slice(0, 5)}${dob.slice(2, 4)}${randomNumber}`;
            case 'UT': return `UT${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'VT': return `VT${lastName.slice(0, 4)}${dob.slice(0, 2)}${randomNumber}`;
            case 'VA': return `VA${lastName.slice(0, 5)}${dob.slice(4, 8)}${randomNumber}`;
            case 'WA': return `WA${lastName.slice(0, 4)}${dob.slice(4, 8)}${randomNumber}`;
            case 'WV': return `WV${lastName.slice(0, 4)}${dob.slice(0, 2)}${randomNumber}`;
            case 'WI': return `WI${lastName.slice(0, 5)}${dob.slice(4, 8)}${randomNumber}`;
            case 'WY': return `WY${lastName.slice(0, 4)}${dob.slice(2, 4)}${randomNumber}`;
            case 'DC': return `DC${lastName.slice(0, 4)}${dob.slice(0, 2)}${randomNumber}`;
            default: throw new Error('Invalid state selected');
        }
    }

    validateLicenseNumber(state, licenseNumber) {
        const patterns = {
            'AL': /^AL[A-Z]{3}\d{2}\d{6}$/,
            'AK': /^AK[A-Z]{5}\d{4}$/,
            'AZ': /^AZ[A-Z]\d{2}\d{6}$/,
            'AR': /^AR[A-Z]{4}\d{2}\d{6}$/,
            'CA': /^CA[A-Z]{5}\d{2}\d{6}$/,
            'CO': /^CO[A-Z]{3}\d{4}\d{6}$/,
            'CT': /^CT[A-Z]{3}\d{2}\d{6}$/,
            'DE': /^DE[A-Z]{3}\d{4}\d{6}$/,
            'FL': /^FL[A-Z]{5}\d{2}\d{6}$/,
            'GA': /^GA[A-Z]{6}\d{4}\d{6}$/,
            'HI': /^HI[A-Z]{3}\d{2}\d{6}$/,
            'ID': /^ID[A-Z]{4}\d{4}\d{6}$/,
            'IL': /^IL[A-Z]{5}\d{4}\d{6}$/,
            'IN': /^IN[A-Z]{4}\d{2}\d{6}$/,
            'IA': /^IA[A-Z]{3}\d{4}\d{6}$/,
            'KS': /^KS[A-Z]{5}\d{4}\d{6}$/,
            'KY': /^KY[A-Z]{4}\d{4}\d{6}$/,
            'LA': /^LA[A-Z]{4}\d{2}\d{6}$/,
            'ME': /^ME[A-Z]{4}\d{4}\d{6}$/,
            'MD': /^MD[A-Z]{4}\d{2}\d{6}$/,
            'MA': /^MA[A-Z]{3}\d{4}\d{6}$/,
            'MI': /^MI[A-Z]{5}\d{2}\d{6}$/,
            'MN': /^MN[A-Z]{4}\d{4}\d{6}$/,
            'MS': /^MS[A-Z]{4}\d{4}\d{6}$/,
            'MO': /^MO[A-Z]{5}\d{2}\d{6}$/,
            'MT': /^MT[A-Z]{4}\d{4}\d{6}$/,
            'NE': /^NE[A-Z]{4}\d{2}\d{6}$/,
            'NV': /^NV[A-Z]{4}\d{4}\d{6}$/,
            'NH': /^NH[A-Z]{4}\d{2}\d{6}$/,
            'NJ': /^NJ[A-Z]{5}\d{4}\d{6}$/,
            'NM': /^NM[A-Z]{4}\d{4}\d{6}$/,
            'NY': /^NY[A-Z]{3}\d{2}\d{6}$/,
            'NC': /^NC[A-Z]{4}\d{2}\d{6}$/,
            'ND': /^ND[A-Z]{4}\d{4}\d{6}$/,
            'OH': /^OH[A-Z]{4}\d{2}\d{6}$/,
            'OK': /^OK[A-Z]{4}\d{4}\d{6}$/,
            'OR': /^OR[A-Z]{4}\d{2}\d{6}$/,
            'PA': /^PA[A-Z]{4}\d{4}\d{6}$/,
            'RI': /^RI[A-Z]{3}\d{4}\d{6}$/,
            'SC': /^SC[A-Z]{5}\d{2}\d{6}$/,
            'SD': /^SD[A-Z]{4}\d{4}\d{6}$/,
            'TN': /^TN[A-Z]{4}\d{2}\d{6}$/,
            'TX': /^TX[A-Z]{5}\d{2}\d{6}$/,
            'UT': /^UT[A-Z]{4}\d{4}\d{6}$/,
            'VT': /^VT[A-Z]{4}\d{2}\d{6}$/,
            'VA': /^VA[A-Z]{5}\d{4}\d{6}$/,
            'WA': /^WA[A-Z]{4}\d{4}\d{6}$/,
            'WV': /^WV[A-Z]{4}\d{2}\d{6}$/,
            'WI': /^WI[A-Z]{5}\d{4}\d{6}$/,
            'WY': /^WY[A-Z]{4}\d{2}\d{6}$/,
            'DC': /^DC[A-Z]{4}\d{2}\d{6}$/
        };
        const pattern = patterns[state];
        return pattern ? pattern.test(licenseNumber) : false;
    }

    generateBarcode(data) {
        const barcodeElement = document.getElementById('barcode');
        barcodeElement.innerHTML = ''; // Clear previous barcode
        
        const barcodeData = PDF417.encode(data);
        const svg = `<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">${barcodeData}</svg>`;
        barcodeElement.innerHTML = svg;
    }

    toggleTheme() {
        document.body.classList.toggle('dark-mode');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LicenseGenerator();
});
