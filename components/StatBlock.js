import React from "react";
import "../node_modules/vellum-monster/lib/monster"



export function StatBlock() {

  return (
    <vellum-monster
      id="warhorse"
      class="official"
      name="Warhorse"
      size="Large"
      type="beast"
      alignment="unaligned"
      ac="11"
      armor="natural armor"
      hp="20"
      hit-die="16d10 + 48"
      speeds='["60 ft."]'
      cr="½"
      str="18"
      dex="12"
      con="13"
      int="2"
      wis="12"
      cha="7"
      senses='["passive Perception 11"]'
      traits='[
    {
      "name": "Trampling Charge",
      "description": "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
    }
  ]'
      actions='[
    {
      "name": "Hooves",
      "type": "melee-attack",
      "bonus": "+4",
      "reach": "5ft.",
      "target": "one target",
      "damage": "2d6 + 4",
      "damageType": "bludgeoning"
    }
  ]'
    />
  );
}