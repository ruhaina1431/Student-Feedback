const apiURL =
"https://w4vvcf5tld.execute-api.us-east-2.amazonaws.com/StudentFeedbackAPI";


const form = document.getElementById("feedbackForm");

const message = document.getElementById("message");


form.addEventListener("submit", async function(event){

    event.preventDefault();


    const rating = document.querySelector(
        'input[name="star"]:checked'
    );


    if(!rating){

        message.innerHTML = "⭐ Please select rating";

        return;

    }


    const data = {

        studentId:
        document.getElementById("studentId").value,


        name:
        document.getElementById("name").value,


        branch:
        document.getElementById("branch").value,


        rating:
        rating.value,


        feedback:
        document.getElementById("feedback").value

    };


    console.log("Sending data:", data);



    try{


        const response = await fetch(apiURL, {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });



        const result = await response.json();


        console.log("Response:", result);



        if(response.ok){

            message.innerHTML =
            "✅ Feedback submitted successfully";

            form.reset();

        }
        else{

            message.innerHTML =
            "❌ Failed to submit feedback";

        }


    }

    catch(error){

        console.error(error);

        message.innerHTML =
        "❌ Error submitting feedback";

    }


});