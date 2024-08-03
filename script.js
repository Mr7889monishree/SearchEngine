
const acesskey="1qozFvXYTKZFZQYGGPYslxHtyPSSbYr9Vj68lfKYtLs";

//taking all the id as input here for the functionality
const searchForm=document.getElementById("search-form");
const searchInput=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreBtn=document.getElementById("show-more-btn");

//api part
let keyword=""
let pages=1
async function SearchImages(){
    keyword=searchInput.value;
    const url=`https://api.unsplash.com/search/photos?page=${pages}&query=${keyword}&client_id=${acesskey}&per_page=12`;//per_page so that we get that much images if its 12 we get 12 images;


    const response=await fetch(url);
    const data=await response.json();
    
    const result=data.results;
    if(pages === 1){
        searchResult.innerHTML="";
    }
    result.map((results)=>{
        const image=document.createElement("img");
        image.src=results.urls.small;
        const imgLink=document.createElement("a");
        imgLink.href=results.links.html;
        imgLink.target="_blank"; //this will open the link in the new tab
        //toplace the image inside the anchor tag
        imgLink.appendChild(image);
        searchResult.appendChild(imgLink);

    })
    showMoreBtn.style.display="block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    pages=1;
    SearchImages();
})
showMoreBtn.addEventListener("click",()=>{
    pages++;
    SearchImages();
})