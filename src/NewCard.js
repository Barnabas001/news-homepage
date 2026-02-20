export default function NewCard() {
  return (
    <div className="newBrief">
      <h2>New</h2>
      <NewContentDetails
        title={"Hydrogen VS Electric Cars"}
        brief={"Will hydrogen-fueled cars ever catch up to EVs?"}
      />
      <NewContentDetails
        title={"The Downsides of AI Artistry"}
        brief={
          "What are the possible adverse effects of on-demand AI image generation?"
        }
      />
      <NewContentDetails
        title={"Is VC Funding Drying Up"}
        brief={
          "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
      />
    </div>
  );
}

function NewContentDetails({ title, brief }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{brief}</p>
    </div>
  );
}
