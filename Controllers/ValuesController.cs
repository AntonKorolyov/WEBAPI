using MvcApplication38.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcApplication38.Controllers
{
    public class PersonsController : ApiController
    {
       
        public IEnumerable<Person> Get()
        {
            List<Person> pers = new List<Person>();
            Functions t = new Functions();
           pers = t.ReturnPersons();
           return pers;
        }

      
        public Person Get(int id)
        {
            Person p = new Person();
            Functions t = new Functions();
            p = t.Getperson(id);
            return p;
        }

       
        public void Post(Person person)
        {
            
            Functions t = new Functions();
            t.InsertNewPerson(person);
        }

       
        public void Put(Person person)
        {
            Functions.UpdatePerson(person);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            Functions.DeletePerson(id);
        }
    }
}