"use client";
import OurTeamsBanner from '@/components/OurTeams/OurTeamsBanner';
import OurTeamsDrivesUs from '@/components/OurTeams/OurTeamsDrivesUs';
import OurTeamsSnapshot from '@/components/OurTeams/OurTeamsSnapshot';
import OurTeamsWrkTogether from '@/components/OurTeams/OurTeamsWrkTogether';
import React from 'react'

const page = () => {
 

  return (
    <div>
      <section>
        <OurTeamsBanner/>
      </section>

      <section>
        <OurTeamsSnapshot/>
      </section>

       <section>
        <OurTeamsDrivesUs/>
      </section>

       <section>
        <OurTeamsWrkTogether/>
      </section>
     
    </div>
  )
}

export default page
