$(function(){
    $.ajax({
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-039?Authorization=CWB-AE3808BA-8CA9-4E15-ABC0-B0D0056DB049&elementName=T',
        type: "GET",
        dataType: "json",
        success: function(resource) {
            console.log(resource);
            console.log(resource.records.locations[0].locationsName);

            let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let j = 0;



            $('#city_name').html(resource.records.locations[0].locationsName);
            $('#district').html(resource.records.locations[0].location[0].locationName);
            $('#tempture').html(resource.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176;");
          
            for(let i = 0; i < 10; i++){
                // console.log($('.block').eq(i).find('small').html());
                // console.log($('.block').eq(i).find('h6').html());
                
                if((i % 2) == 0){
                    let T = resource.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                    let tempture = `<strong>${T}&#176;</strong>`;
                    let wd  = resource.records.locations[0].location[0].weatherElement[0].time[i].startTime;
                    // console.log(tempture);

                    $('.block').eq(j).find('h6').html(tempture);
                    const d = new Date(wd);
                    let day_index = d.getDay();
                    $('.block').eq(j).find('small').html(weekday[day_index]);
                    j++;
                }
            
            }
           
        },
        error: function(error){
            console.log();
            alert("ERROR!!!");
        }
    })
})






// $(function(){
//     $.ajax({
//         url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-E4F2AAB5-990B-448E-9717-93D20AA444FD&format=JSON&locationName=%E5%A4%A7%E5%90%8C%E5%8D%80&elementName=T',
//         type: "GET",
//         dataType: "json",
//         success: function(resource){
//             console.log(resource);
            

//             let weekday = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri","Sat"];
//             let j = 0;
            
//             $('#city_name').html(resource.records.locations[0].locationsName);
//             $('#district').html(resource.records.locations[0].location[0].locationName);
//             $('#tempture').html(resource.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176;");

            
//             for(let i = 0 ; i < 10 ; i++){
//                 console.log($('.block').eq(i).find('small').html());
//                 console.log($('.block').eq(i).find('h6').html());
                
//                 if( (i % 2) == 0 ){
//                     let T = resource.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
//                     let tempture = `<strong>${T}&#176;</strong>`;
//                     let wd = resource.records.locations[0].location[0].weatherElement[0].time[i].startTime;

//                     console.log(tempture);
//                     $('.block').eq(j).find('h6').html(tempture);
//                     const d = new Date(wd);
//                     let day_index = d.getDay();
//                     $('.block').eq(j).find('small').html(weekday[day_index]);

//                     j++;
//                 }

                
//             }
            
//         },
//         error:function(error){
//             console.log(error);
//         },
//     })
// })