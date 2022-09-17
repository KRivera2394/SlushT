import React from "react";
import { motion } from "framer-motion";

export default function Menu() {
  return (
    <div>
      <div>
        <h1 className="menuList homeHeading mb-5">MENU</h1>
      </div>
      <div className="menuCont d-flex justify-content-center">
        <div className="card menuBack meB">
          <motion.div
            initial={{ y: -600 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, type: "tween" }}
            className="card-header scFlavors "
          >
            SNOW CONE FLAVORS
            <div className="menPrice">$5.00</div>
          </motion.div>
          <ul className="menuUL">
            <motion.li
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: "tween" }}
            >
              STRAWBERRY
            </motion.li>
            <motion.li
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, type: "tween" }}
            >
              CHERRY
            </motion.li>
            <motion.li
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9, type: "tween" }}
            >
              PINA COLADA
            </motion.li>
            <motion.li
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.1, type: "tween" }}
            >
              PINEAPPLE
            </motion.li>
            <motion.li
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.3, type: "tween" }}
            >
              COTTON CANDY
            </motion.li>
            <motion.li
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.5, type: "tween" }}
            >
              BLUE BUBBLEGUM
            </motion.li>
          </ul>
        </div>
        <div className="card menuBack ">
          <motion.div
            initial={{ y: -3000 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.6, type: "tween" }}
            className="card-header scFlavors "
          >
            SLUSHY FLAVORS
            <div className="menPrice">$6.00</div>
          </motion.div>
          <ul className="menuUL">
            <motion.li
              initial={{ y: 3000 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.7, type: "tween" }}
            >
              BLUE RASPBERRY
            </motion.li>
            <motion.li
              initial={{ y: 3000 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.9, type: "tween" }}
            >
              STRAWBERRY
            </motion.li>
            <motion.li
              initial={{ y: 3000 }}
              animate={{ y: 0 }}
              transition={{ delay: 2.1, type: "tween" }}
            >
              WATERMELON
            </motion.li>
            <motion.li
              initial={{ y: 3000 }}
              animate={{ y: 0 }}
              transition={{ delay: 2.3, type: "tween" }}
            >
              GREEN APPLE
            </motion.li>
            <motion.li
              initial={{ y: 3000 }}
              animate={{ y: 0 }}
              transition={{ delay: 2.5, type: "tween" }}
            >
              COTTON CANDY
            </motion.li>
            <motion.li
              initial={{ y: 3000 }}
              animate={{ y: 0 }}
              transition={{ delay: 2.7, type: "tween" }}
            >
              JOLLY RANCHER GRAPE
            </motion.li>
          </ul>
        </div>
        <div className="card menuBack ">
          <ul className="menuUL genMen">
            <li>
              - ADULT SLUSHY'S: <span className="menPrice">$12.00</span>
            </li>

            <li>
              - WATER : <span className="menPrice">$1.00</span>
            </li>
          </ul>
        </div>
        <div className="card menuBack ">
          <div className="card-header scFlavors ">PAYMENT</div>

          <ul className="menuUL genMen">
            <li>
              - <span className="menPrice">$ CASH $</span>{" "}
            </li>

            <li>
              -<span className="menPrice"> Cash APP :</span>{" "}
              <span className="cashPay">$slushtrap</span>
            </li>
            <li>
              - <span className="menPrice">Zelle / Apple Pay :</span>{" "}
            </li>
            <li className="menPrice">813-970-TRAP(8727)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
