import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import Tile from "./Tile";
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';


function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
              button_text="to the collection"
              disabled={false}
          >
          </Button>
          <Button
              button_text="shop all bags"
              disabled={false}
          >
          </Button>
          <Button
              button_text="pre-orders"
              disabled={true}
          >
          </Button>
        </nav>
        <main>
          <Product
              image={bag_1}
              title="The handy bag"
              price="400"
          />
          <Product
              image={bag_2}
              title="The stylish bag"
              price="250"
          />
          <Product
              image={bag_3}
              title="The simple bag"
              price="300"
          />
          <Product
              image={bag_4}
              title="The trendy bag"
              price="150"
          />
        </main>
        <footer>
          <Tile
              image={null}
              img_title={null}
              title="The Brand"
          >
            <p>Simsalabim</p>
            <p>Paragraaf erbij</p>
          </Tile>
          <Tile
              image={brand}
              img_title="Brand"
              title={null}
              tile_text={null}
          />
          <Tile
              image={our_story}
              img_title="Our story"
              title={null}
              tile_text={null}
          />
          <Tile
              image={null}
              img_title={null}
              title="Our Story"
          >
            <p>My Bonnie lies over the ocean.</p>
            <p>My Bonnie lies over the sea.</p>
            <p>Check deze, een derde paragraaf.</p>
          </Tile>
        </footer>
      </>
  );
}

export default App;