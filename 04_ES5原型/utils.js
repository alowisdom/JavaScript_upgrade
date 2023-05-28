
function inherin(Subtype,Supertype) {
    Subtype.prototype = Object.create(Supertype.prototype)
    return 
}