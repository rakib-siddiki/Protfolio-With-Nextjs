"use client";
import React from "react";
import { CARD_DITAILS } from "../Db/Card";
import { About, Card } from ".";

const HomeWrapper = () => {
  return (
    <>
      <About />
      <section className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-x-4 gap-y-16 mb-20">
        {(CARD_DITAILS ?? []).map(({ id, ...data }) => (
          <Card key={id} {...data}></Card>
        ))}
      </section>
    </>
  );
};

export default HomeWrapper;
