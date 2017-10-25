/*
Products
    For certain industries, players can creat their own custom products
    Essentially, these are just things you give a certain name to.

    Products have certain properties that affect how well they sell. These properties
    are just numbers. For each Industry, only some of these properties are applicable
    (e.g. Performance isnt applicable for food industry)
        Demand: Determined by industry. For most industries this will slowly decrease over time, meaning
                that you must create new and better products to remain successful. The speed at which this
                decreases over time is dependent on industry
        Competition: Determined by industry
        Markup : Determined by Industry
        Quality:
        Performance:
        Durability:
        Reliability:
        Aesthetics:
        Features:
        Location: Only valid for 'building' products like Restaurants, Hospitals, etc.
    Scientific Research affects the properties of products
Materials:
    To create Products, you need materials. There are different tiers of Materials
    Materials have several properties that determine how profitable they can be:
        Quality:
        Demand:
        Competition:
        Markup: How much price markup a material can have before theres a significant dropoff in how much its bought

    Materials Types:
        1st tier:
            Water - High Stable Demand, Medium competition, low markup
            Energy - Suuuuuuper high  stable demand, High competition, low markup
        2nd Tier:
            Food - High Stable Demand, Lots of competition, medium markup
            Plants - Initially high but volatile demand. Decent competition, low markup
            Metal - Very high stable demand, lots of competition, low markup
        3rd Tier:
            Hardware - Very high stable demand, lots of competition, med markup
            Chemicals - High stable demand, good amount of competition, med markup
            Real estate - Initially high but volatile demand. Decent competition, med markup. Tied to a certain city
        4th tier:
            Drugs - High stable demand, lots of competition, medium markup
            Robots - Very high stable demand, looots of competition, high markup
            AI Cores - Very high stable demand, looooots of competition, veeery high markup
        5th tier:
            Scientific Research

Industries:
    - Some Industries let you create your own custom "Products", while others just produce Materials
    - Each Industry has different characteristics for things
    - List of Industries:
        Energy - Requires hardware, real estate
                 Produces Energy
                 Can Use Hardware/AI Cores to increase production
                 More real estate = more production with very little dimishing returns
                 Production increased by scientific research
                 High starting cost
        Utilities - Requires hardware, Real Estate
                    Produces Water
                    Can use Hardware, Robotics, and AI Cores to increase production
                    More real estate = more production with medium diminishing returns
                    Production increased by scientific research
                    High starting cost
        Agriculture - Requires Water and Energy
                      Produces food and plants
                      Can use Hardware/Robotics/AI Cores to increase production
                      Production increased by scientific research
                      More real estate = more production  with very little diminishing returns
                      Medium starting cost
        Fishing - Requires energy
                  Produces lots of food
                  Can use Hardware/Robotics/AI Cores to increase production
                  Production increased by scientific research
                  More real estate = slightly more production with very high diminishing returns
                  Medium starting cost (higher than agriculture)
        Mining - Requires Energy
                 Produces Metal
                 Can use hardware/Robotics/AI Cores to increase production
                 Production increased by scientific research
                 More real estate = more production with medium diminishing returns
                 High starting cost
        Food - Create your own "restaurant" products
               Restaurants require food, water, energy, and real estate
               Restaurants in general are high stable demand, but lots of competition, and medium markup
               Low starting cost
               Production increase from real estate diminishes greatly in city. e.g. making many restaurants
               in one city has high diminishing returns, but making a few in every city is good
        Tobacco - Create your own tobacco products
                  Requires plants, water, and real estate
                  High volatile demand, but not much competition. Low markup
                  Low starting cost
                  Product quality significantly affected by scientific research
        Chemical - Create your own chemical products.
                   Requires plants, energy, water, and real estate
                   High stable demand, high competition, low markup
                   Medium starting cost
                   Advertising does very little
                   Product quality significantly affected by scientific research
        Pharmaceutical - Create your own drug products
                         Requires chemicals, energy, water, and real estate
                         Very high stable demand. High competition, very high markup
                         High starting cost
                         Requires constant creation of new and better products to be successful
                         Product quality significantly affected by scientific research
        Computer - Creates 'Hardware' material
                   Requires metal, energy, real estate
                   Can use Robotics/AI Cores to increase production
                   More real estate = more production with high diminishing returns
                   Production significantly affected by scientific research
                   High starting cost
        Robotics - Create 'Robots' material and create your own 'Robot' products
                   Requires hardware, energy, and real estate
                   Production can be improved by using AI Cores
                   Extremely high stable demand, medium competition, high markup
                   Extremely high starting cost
                   Product quality significantly affected by scientific research
                   more real estate = more production with medium diminishing returns for 'Robot' materials
        Software - Create 'AI Cores' material and create your own software products
                   Requires hardware, energy, real estate
                   Very high stable demand, high competition, low markup
                   Low starting cost
                   Product quality slightly affected by scientific research
        Healthcare - Open your own hospitals (each is its own product).
                     Requires real estate, robots, AI Cores, energy, water
                     Extremely high stable demand, semi-high competition, super high markup
                     Extremely high starting cost
                     Production increase from real estate diminishes greatly in city. e.g. making many hospitals
                     in one city has high diminishing returns, but making a few in every city is goodIn
        Real Estate - Create 'Real Estate'.
                      Requires metal, energy, water, hardware
                      Can use Hardware/Robotics/AI Cores to increase production
                      Production slightly affected by scientific research
                      Heavily affected by advertising
        Biotechnology -
        Entertainment -
        Finance -
        Mass Media -
        Telecommunications -

    Employees:
        Has morale, happiness, and energy that must be managed to maintain productivity
        Has a city property
        Stats:
            Age, Intelligence, Charisma, Experience, Creativity, Efficiency

        Assigned to different positions. The productivity at each position is determined by
        stats. I.e. each employe should be assigned to positions based on stats to optimize production

        Hiring Employees:
            When you choose to hire employees you are given a randomly generated list of employees to hire
            They will demand a certain salary and maybe stock shares

    Employee Position
        Operations -
        Engineer -
        Business -
        Accounting -
        Management -
        Research and Development -

    Company stats
        A Company has an inventory of products and materials

        Financial stats (All numbers are in per second):
            Revenue - Total income generated
            Expenses - Total Expenses
            Profit - Revenue minus Expenses
            Private Valuation: Investor valuation of your company before you go public. Affects how much money they invest
            Market Cap: Once you go public, it is the total number of shares times stock price
            Earnings Per Share(EPS): Net Income (Profit) / Number of Oustanding Shares
            Price to Earnings: P/E Ratio = Price per Share / EPS

        Awareness: A number indicating how many people are aware of your company
        Popularity: A number indicating how many people like your company
        Warehouse Space: How many materials it can stock
        Office Space:
            Costs $/s in upkeep
            You can open one office space in each city
            Size - increased by upgrades, increases max # employees in the city
                    However if your # employees is near the max this affects employee happiness
            Comfort - Increased by upgrades, affects employees in that office
            Beauty - Increased by upgrades, affects employees in that office
            Tiers of Office Space:
                Basic
                Enhanced
                Luxurious
                Extravagant
            Upgrades
                Things that increase comfort/beauty. Some may cost upkeep and some might not

        Company Upgrades:
            Can upgrade Warehouse Space and Office Space
            Can throw 'events' (company picnic, outing, party, etc.) for one time expenses and temporary boosts
            Advertising, Increases Company Awareness and Popularity

    Investors
        When you start a company you have 1 billion shares (subject to change)
        Four rounds of investing: Seed, Series A, Series B, Series C
        In each round, you can give up certain shares to receive money
        These are optional

        You can choose to go public at any time, at which point your stock price
        will fluctuate based on company performance. Then you can sell whatever
        shares you have left on the stock market.
*/