function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('card-show');
     change.target.classList.add('title-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.card');

for (let elm of elements) {
  observer.observe(elm);
}

let elementsTitle = document.querySelectorAll('.title');
for (let elm of elementsTitle) {
  observer.observe(elm);
}