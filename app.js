const ssd = [
    {brand: "Addlink",
    model: "S70",
    interface: "x4 PCIe 3.0/NVMe",
    formFactor: "M.2",
    capacities: "256GB-2TB",
    controller: "Phison E12S",
    dram: "Yes",
    NANDBrand: "Kioxia",
    NANDType: "TLC",
    readWrite: "3000/2000",
    categories: "Mid-Range NVMe",
    productPage: "Addlink S70",
    price: "(512GB) / 717,00₺",
    link: "https://www.epey.com/sabit-disk/addlink-s70-ad512gbs70m2p.html"
    },
    {brand: "Kioxia",
    model: "Exceria Plus",
    interface: "x4 PCIe 3.0/NVMe",
    formFactor: "M.2",
    capacities: "500GB-2TB",
    controller: "Phison E12S",
    dram: "Yes",
    NANDBrand: "Kioxia",
    NANDType: "TLC",
    readWrite: "3400/3200",
    categories: "Mid-Range NVMe",
    productPage: "Kioxia Excercia Plus",
    price: "(512GB) / 1.199,00₺",
    link: "https://www.akakce.com/ssd/en-ucuz-hp-512gb-ex950-m-2-nvme-pcie-3500-2250mb-s-3d-tlc-nand-5ms22aa-fiyati,1302913696.html"
    }, 
    {brand: "PNY",
    model: "CS3030",
    interface: "x4 PCIe 3.0/NVMe",
    formFactor: "M.2",
    capacities: "250GB-4TB",
    controller: "Phison E12S",
    dram: "Yes",
    NANDBrand: "Kioxia",
    NANDType: "TLC",
    readWrite: "3500/2000",
    categories: "Mid-Range NVMe",
    productPage: "PNY CS3030",
    price: "(500GB) / 1230,00₺",
    link: "https://www.epey.com/sabit-disk/pny-xlr8-cs3030-m280cs3030-500-rb.html"
    },
    {brand: "HP",
    model: "EX950",
    interface: "x4 PCIe 3.0/NVMe",
    formFactor: "M.2",
    capacities: "512GB-2TB",
    controller: "SMI SM2262EN",
    dram: "Yes",
    NANDBrand: "Micron",
    NANDType: "TLC",
    readWrite: "3500/2900",
    categories: "Mid-Range NVMe",
    productPage: "HP EX950",
    price: "(512GB) / 1.279,00₺",
    link: "https://www.akakce.com/ssd/en-ucuz-hp-512gb-ex950-m-2-nvme-pcie-3500-2250mb-s-3d-tlc-nand-5ms22aa-fiyati,1302913696.html"
    },
    
    {brand: "Samsung",
    model: "970 EVO Plus",
    interface: "x4 PCIe 3.0/NVMe",
    formFactor: "M.2",
    capacities: "250GB-2TB",
    controller: "Samsung Phoenix",
    dram: "Yes",
    NANDBrand: "Samsung",
    NANDType: "TLC",
    readWrite: "3500/3200",
    categories: "Mid-Range NVMe",
    productPage: "Samsung 970 EVO",
    price: "(500GB) / 1459,00₺",
    link: "https://www.epey.com/sabit-disk/samsung-970-evo-plus-mz-v7s500bw.html"
    },
    {brand: "WD",
    model: "SN770",
    interface: "x4 PCIe 4.0/NVMe",
    formFactor: "M.2",
    capacities: "250GB-2TB",
    controller: "WD Proprietary",
    dram: "No",
    NANDBrand: "SanDisk",
    NANDType: "TLC",
    readWrite: "5150/4900",
    categories: "Mid-Range NVMe",
    productPage: "WD SN770",
    price: "(1TB) / 1584,97₺",
    link: "https://www.epey.com/sabit-disk/wd-black-sn770-wds100t3x0e.html"
    },
    
];

function reload(){
    row.innerHTML = "";
}

const row = document.querySelector('.row');
const searchBar = document.querySelector('.searchBar');

searchBar.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        searchProduct()
    }
});

function createCards(productPage,brand,model,interface,formFactor,capacities,controller,dram,NANDBrand,NANDType,readWrite,categories,price,link){
    const row = document.querySelector('.row');
        row.innerHTML += `<div class="card">
        <div class="card-body">
            <div class="card-title">
                <h3>${productPage}</h3>
            </div>
            <div class="card-column">
                <h5>Brand :</h5><span>${brand}</span>
                <h5>Model :</h5><span>${model}</span>
                <h5>Interface :</h5> <span>${interface}</span>
                <h5>Form Factor :</h5><span>${formFactor}</span>
                <h5>Capacities :</h5><span>${capacities}</span>
                <h5>Controller :</h5><span>${controller}</span>
                <h5>DRAM :</h5><span>${dram}</span>
                <h5>NAND Brand :</h5><span>${NANDBrand}</span>
                <h5>NAND Type :</h5><span>${NANDType}</span> 
                <h5>R/W (Up to, in MB/s) :</h5><span>${readWrite}</span> 
                <h5>Categories :</h5><span>${categories}</span> 
                <h5>Price :</h5><span><a href="${link}"target="_blank">${price} </a> </span> 
            </div>
        </div>
    </div>`

}

for(const product of ssd){
    createCards(product.productPage, product.brand, product.model, product.interface, product.formFactor,product.capacities,product.controller,product.dram,product.NANDBrand,product.NANDType,product.readWrite,product.categories,product.price,product.link)
}


function searchProduct(){
    reload()
    if(searchBar.value === ""){
        reload()
        for(const product of ssd){
            createCards(product.productPage, product.brand, product.model, product.interface, product.formFactor,product.capacities,product.controller,product.dram,product.NANDBrand,product.NANDType,product.readWrite,product.categories,product.price,product.link)}
    }
    if(ssd.find(a => a.productPage.toLocaleLowerCase() === searchBar.value.toLocaleLowerCase())){
        getexact()
    }
    else{
        reload()
        const contentObject = ssd.filter(a => a.productPage.toLocaleLowerCase().includes(searchBar.value.toLocaleLowerCase())).map(data => createCards(data.productPage, data.brand, data.model, data.interface, data.formFactor,data.capacities,data.controller,data.dram,data.NANDBrand,data.NANDType,data.readWrite,data.categories,data.price,data.link))
            return contentObject
    }
    

}

function getexact(){
        reload()
        const findedSsds = ssd.find(a => a.productPage.toLocaleLowerCase() === searchBar.value.toLocaleLowerCase())
    createCards(findedSsds.productPage, findedSsds.brand, findedSsds.model, findedSsds.interface, findedSsds.formFactor,findedSsds.capacities,findedSsds.controller,findedSsds.dram,findedSsds.NANDBrand,findedSsds.NANDType,findedSsds.readWrite,findedSsds.categories,findedSsds.price,findedSsds.link)
}


