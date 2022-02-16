export let stringIsEmpty = (str) => {
    return (!str || /^\s*$/.test(str));
};

export let notCharString = (str) => {
    return ( !(/^[A-Za-z\s]+$/.test(str)));
};

export let emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export let phoneRegex= RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)