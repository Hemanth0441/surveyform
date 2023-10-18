import React, { useState } from 'react';

function SurveyForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    country: '',
    gender: '',
    profession: '',
    email: '',
    phonenumber: '',
    first_time:'',
    suggestion:'',
    satisfied:'',
    userSuggestion:''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonenumber: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
    
        setErrors((prev)=>({
            ...prev,[name]:""
        }))

       
  };

  const validateForm = () => {
    const { firstName, lastName, email,phonenumber ,country,gender,profession,dob,satisfied,suggestion,first_time,userSuggestion} = formData;
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'First Name is required';
    }

    if (!lastName) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!country) {
        newErrors.country = 'country is required';
      }
      if (!profession) {
        newErrors.profession = 'profession is required';
      }

      if (!gender) {
        newErrors.gender = 'Gender is required';
      }
      if (!suggestion) {
        newErrors.suggestion = ' is required';
      }
      if (!satisfied) {
        newErrors.satisfied = ' is required';
      }
      if (!first_time) {
        newErrors.first_time = ' is required';
      }

      if (!dob) {
        newErrors.dob = 'Date Of Birth is required';
      }

      if (!userSuggestion) {
        newErrors.userSuggestion = 'userSuggestion is required';
      }

    if (!phonenumber) {
      newErrors.phonenumber = 'phonenumber is required';
    } else if (!/^\d{10}$/.test(phonenumber)) {
      newErrors.phonenumber = 'Mobile should be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if there are no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
    console.log(formData)
    setFormData({
        firstName: '',
        lastName: '',
        dob: '',
        country: '',
        gender: '',
        profession: '',
        email: '',
        phonenumber: '',
        first_time:'',
        suggestion:'',
        satisfied:'',
        
    userSuggestion:''
      })
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      country: '',
      gender: '',
      profession: '',
      email: '',
      phonenumber: '',
      first_time:'',
      suggestion:'',
      satisfied:'',
      userSuggestion:''
    });

    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
    });
  };

  return (
    <div className='bg-teal-500 py-10'>
        <p className="text-3xl text-center py-2 text-white">Customer Survey Form</p>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-lg mx-auto rounded p-2 bg-white border  shadow-xl'>
       
       <div className='grid grid-cols-2 gap-4'>

        <div>
             <label className='text-md font-semibold py-1' >
          First Name:</label>
          <input
            type="text"
       className='border-2 pl-2 p-1 focus:outline-none '
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="error text-red-500">{errors.firstName}</div>}
            </div>
            <div>
    
    <label className='text-md font-semibold py-1'>
      Last Name:</label>
      <input
       className='border-2 pl-2 p-1 focus:outline-none '
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <div className="error text-red-500">{errors.lastName}</div>}
    
</div>
<div>
    
        <label className='text-md font-semibold py-1'>
          DateOfBirth:</label>
          <input
           className='border-2 pl-2 p-1 focus:outline-none w-full '
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <div className="error text-red-500">{errors.dob}</div>}
</div>
<div className='flex flex-col'>
<label className='text-md font-semibold py-1' >
          country:</label>
         
          <select name="country" id="" value={formData.country} onChange={handleChange}  className='border-2 pl-2 p-1 focus:outline-none '>
          <option value="">Select Country</option>

            <option value="india">India</option>
            <option value="Australia">Australia</option>
            <option value="USA">USA</option>
            <option value="Japan">Japan</option>
          </select>
          {errors.country && <div className="error text-red-500">{errors.country}</div>}
        
</div>
<div>
<label className='text-md font-semibold py-1'>
          profession:</label>
          <input
           className='border-2 pl-2 p-1 focus:outline-none '
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          />
          {errors.profession && <div className="error text-red-500">{errors.profession}</div>}

</div>

<div className='flex flex-col'>
<label className='text-md font-semibold py-1'>
          email:</label>
          <input
           className='border-2 pl-2 p-1 focus:outline-none '
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error text-red-500">{errors.email}</div>}


</div>

<div>
<label className='text-md font-semibold py-1'>
          phonenumber:</label>
          <input
           className='border-2 pl-2 p-1 focus:outline-none '
            type="text"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <div className="error text-red-500">{errors.phonenumber}</div>}


</div>
        </div>
        
        





        

       

        <label className='text-md font-semibold py-1'>
          gender:</label>
          <div className='grid grid-cols-3'>

          <div className='flex  gap-2'>
            <p>Male</p>
          <input

            type="checkbox"
   checked={formData.gender=="male"}
   onClick={()=>{setFormData((prev)=>(
    {...prev,gender:"male"}
   ))
   setErrors((prev)=>({
    ...prev,gender:""
}))
}}
           
           
          />
          </div>
          <div className='flex  gap-2'>
            <p>Female</p>
          <input

            type="checkbox"
   checked={formData.gender==="female"}
   onClick={()=>{setFormData((prev)=>(
    {...prev,gender:"female"}
   ))
   setErrors((prev)=>({
    ...prev,gender:""
}))}}
            
          />
          </div>
          <div className='flex  gap-2'>
            <p>Others</p>
          <input

            type="checkbox"
   checked={formData.gender=="Others"}
   onClick={()=>{setFormData((prev)=>(
    {...prev,gender:"Others"}
   ))
   setErrors((prev)=>({
    ...prev,gender:""
}))}}
        
          />
          </div>
          </div>

          {errors.gender && <div className="error text-red-500">{errors.gender}</div>}
        

       
         
         
          <label className='text-md font-semibold py-1'>
          Is this first time You are using our product & service?</label>
          <div className='grid grid-cols-3'>

          <div className='flex  gap-2'>
            <p>Yes</p>
          <input

            type="radio"
   checked={formData.first_time=="Yes"}
   onClick={()=>{setFormData((prev)=>(
    {...prev,first_time:"Yes"}
   ))

   setErrors((prev)=>({
    ...prev,first_time:""
})
)}}
           
           
          />
          </div>
          <div className='flex  gap-2'>
            <p>No</p>
          <input

            type="radio"
   checked={formData.first_time==="No"}
   onClick={()=>{setFormData((prev)=>(
    {...prev,first_time:"No"}
   ))
   setErrors((prev)=>({
    ...prev,first_time:""
}))
}}
            
          />
          </div>
          
          </div>

          {errors.first_time && <div className="error text-red-500">{errors.first_time}</div>}

           
          <label className='text-md font-semibold py-1'>
          Would you suggession to your friends and colleague?</label>
          <div className='grid grid-cols-3'>

          <div className='flex  gap-2'>
            <p>Yes</p>
          <input

            type="radio"
   checked={formData.suggestion=="Yes"}
   onClick={()=>{setFormData((prev)=>(
    {...prev,suggestion:"Yes"}
   ))

   setErrors((prev)=>({
    ...prev,suggestion:""
}))

}}
           
           
          />
          </div>
          <div className='flex  gap-2'>
            <p>No</p>
          <input

            type="radio"
   checked={formData.suggestion==="No"}
   onClick={()=>{setFormData((prev)=>(
    {...prev,suggestion:"No"}
   ))
   setErrors((prev)=>({
    ...prev,suggestion:""
}))
}}
            
          />
          </div>
          
          </div>

          {errors.suggestion && <div className="error text-red-500">{errors.suggestion}</div>}


          <label className='text-md font-semibold py-1'>
          How satisfied are you with our company overall?</label>
          <div className='grid grid-cols-3'>

          <div className='flex  gap-2'>
            <p>Satisfied</p>
          <input

            type="radio"
   checked={formData.satisfied=="Satisfied"}
   onClick={()=>{setFormData((prev)=>(
    {...prev,satisfied:"Satisfied"}
   ))
   setErrors((prev)=>({
    ...prev,satisfied:""
}))

}}
           
           
          />
          </div>
          <div className='flex  gap-2'>
            <p>Undecided</p>
          <input

            type="radio"
   checked={formData.satisfied==="Undecided"}
   onClick={()=>{setFormData((prev)=>(
    {...prev,satisfied:"Undecided"}
   ))

   setErrors((prev)=>({
    ...prev,satisfied:""
}))

}}
            
          />
          </div>
          
          <div className='flex  gap-2'>
            <p>Unsatisfied</p>
          <input

            type="radio"
   checked={formData.satisfied=="Unsatisfied"}
   onClick={()=>{setFormData((prev)=>(
    {...prev,satisfied:"Unsatisfied"}
   ))
   setErrors((prev)=>({
    ...prev,satisfied:""
}))
}}
           
           
          />
          </div> 
          </div>

          {errors.satisfied && <div className="error text-red-500">{errors.satisfied}</div>}

<div className="flex flex-col">
    <p>Do you have suggestion to improve our service?</p>
    <textarea name="userSuggestion" id="" cols={7} className='border-2 pl-2 p-1 focus:outline-none' onChange={handleChange} value={formData.userSuggestion}/>
    {errors.userSuggestion && <div className="error text-red-500">{errors.userSuggestion}</div>}
</div>

       
<div className='flex gap-4 my-2'>

        <button type="submit" className='bg-blue-500 px-5 py-2 text-white rounded'>Submit</button>
        <button type="button" className='bg-orange-500 px-5 py-2 text-white rounded' onClick={handleReset}>
          Reset
        </button>
</div>
      </form>
    </div>
  );
}

export default SurveyForm;
