import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map(
        (person) => (
          <article key={person.id} className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </article>
        )
        // {
        //   const { name, id, age, image } = person;
        //   return (
        //     <article key={id} className="person">
        //       <img src={image} a lt={name} />
        //       <div>
        //         <h4>{name}</h4>
        //         <p>{age} years</p>
        //       </div>
        //     </article>
        //   );
        // }
      )}
      {}
    </>
  );
};

export default List;
