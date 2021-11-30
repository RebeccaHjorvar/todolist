//jshint esversion:6

const GetDate = () =>{
    let today = new Date();

    let options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
  
    let day = today.toLocaleDateString("en-US", options);
    return day;
};

const GetDay = () => {
    let today = new Date();

    let options = {
      weekday: "long"
    };
  
    let day = today.toLocaleDateString("en-US", options);
    return day;
};

module.exports.getDate = GetDate;
module.exports.getDay = GetDay;