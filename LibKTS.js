window.LibKTS = (()=>{

const TournamentStyle = Object.freeze({
    ADVANCED: {
        code: 1,
        label: 'Constructed - Advanced',
    },
    TRADITIONAL: {
        code: 2,
        label: 'Constructed - Traditional',
    },
    SEALED: {
        code: 3,
        label: 'Sealed',
    },
    OPEN_DUELING: {
        code: 4,
        label: 'Open Dueling',
    },
});

const TournamentStructure = Object.freeze({
    SWISS: {
        code: 1,
        label: 'Swiss Draw',
    },
    SINGLE_ELIMINATION: {
        code: 2,
        label: 'Single-Elimination',
    },
});

const PlayerStructure = Object.freeze({
    INDIVIDUAL: {
        code: 1,
        label: 'Individual',
        teamSize: 1,
    },
    TAG_DUEL: {
        code: 2,
        label: 'Tag Dueling',
        teamSize: 2,
    },
    THREE_VS_THREE: {
        code: 3,
        label: 'Three-Player Team',
        teamSize: 3,
    },
    FOUR_VS_FOUR: {
        code: 4,
        label: 'Four-Player Team',
        teamSize: 4,
    },
    FIVE_VS_FIVE: {
        code: 5,
        label: 'Five-Player Team',
        teamSize: 5,
    },
});

const EventType = Object.freeze({
    LOCAL: {
        code: 1,
        label: 'Local',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    LOCAL_JUNIOR: {
        code: 2,
        label: 'Local - Junior',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    GIANT_CARD: {
        code: 5,
        label: 'ATTACK OF THE GIANT CARD!!',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    BATTLE_CITY: {
        code: 29,
        label: 'Battle City',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    BATTLE_PACK_DRAFT: {
        code: 18,
        label: 'Battle Pack - Draft',
        defaultSettings: {
            tournamentStyle: TournamentStyle.SEALED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    BATTLE_PACK_SEALED: {
        code: 19,
        label: 'Battle Pack - Sealed',
        defaultSettings: {
            tournamentStyle: TournamentStyle.SEALED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    COUNTRY_SPECIFIC: {
        code: 9,
        label: 'Country Specific',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    DEMO: {
        code: 26,
        label: 'Demo',
        defaultSettings: {
            tournamentStyle: TournamentStyle.SEALED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    DEMO: {
        code: 27,
        label: 'Demo Day',
        defaultSettings: {
            tournamentStyle: TournamentStyle.SEALED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    DRAGON_DUEL: {
        code: 3,
        label: 'Dragon Duel',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    DUELIST_LEAGUE: {
        code: 16,
        label: 'Duelist League',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    GO_FOR_THE_GOLD: {
        code: 6,
        label: 'Go for the Gold',
        defaultSettings: {
            tournamentStyle: TournamentStyle.SEALED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    OTS_CHAMPIONSHIP: {
        code: 17,
        label: 'OTS Championship',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    PEGASUS_CHALLENGE: {
        code: 4,
        label: 'Pegasus Challenge',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    SNEAK_PEEK: {
        code: 15,
        label: 'Sneak Peek',
        defaultSettings: {
            tournamentStyle: TournamentStyle.OPEN_DUELING,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    STARTER_DECK: {
        code: 20,
        label: 'Starter Deck',
        defaultSettings: {
            tournamentStyle: TournamentStyle.SEALED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    STARTER_DECK_COMBINATION: {
        code: 21,
        label: 'Starter Deck Combination',
        defaultSettings: {
            tournamentStyle: TournamentStyle.SEALED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    STRUCTURE_DECK: {
        code: 22,
        label: 'Structure Deck',
        defaultSettings: {
            tournamentStyle: TournamentStyle.SEALED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    STRUCTURE_DECK_COMBINATION: {
        code: 23,
        label: 'Structure Deck Combination',
        defaultSettings: {
            tournamentStyle: TournamentStyle.SEALED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    TAG_DUELING: {
        code: 25,
        label: 'Tag Dueling',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.TAG_DUEL,
        },
    },
    TEAM_DUELING: {
        code: 24,
        label: 'Team Dueling',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.THREE_VS_THREE,
        },
    },
    WCQ_CONTINENTAL: {
        code: 13,
        label: 'WCQ: Continental Championship',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    WCQ_NATIONAL: {
        code: 12,
        label: 'WCQ: National Championship',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    WCQ_REGIONAL: {
        code: 11,
        label: 'WCQ: Regionals',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    WIN_A_MAT: {
        code: 7,
        label: 'Win-A-Mat',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    WORLD_CHAMPIONSHIP: {
        code: 14,
        label: 'World Championship',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    YCS: {
        code: 10,
        label: 'Yu-Gi-Oh! Championship Series',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    YUGIOH_DAY: {
        code: 28,
        label: 'Yu-Gi-Oh! Day',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    TIN_CHALLENGE: {
        code: 8,
        label: 'Yu-Gi-Oh! Tin Challenge',
        defaultSettings: {
            tournamentStyle: TournamentStyle.SEALED,
            tournamentStructure: TournamentStructure.SINGLE_ELIMINATION,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    GENERIC_TIER1: {
        code: 30,
        label: 'Tier 1 - Other',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
    GENERIC_TIER2: {
        code: 31,
        label: 'Tier 2 - Other',
        defaultSettings: {
            tournamentStyle: TournamentStyle.ADVANCED,
            tournamentStructure: TournamentStructure.SWISS,
            playerStructure: PlayerStructure.INDIVIDUAL,
        },
    },
});

const StaffRole = Object.freeze({
    TOURNAMENT_ORGANIZER: {
        code: 1,
        label: 'Organizer',
    },
    HEAD_JUDGE: {
        code: 2,
        label: 'Head Judge',
    },
    ASSISTANT_HEAD_JUDGE: {
        code: 3,
        label: 'Assistant Head Judge',
    },
    TEAM_LEAD: {
        code: 4,
        label: 'Floor Judge - Team Lead',
    },
    FLOOR_JUDGE: {
        code: 5,
        label: 'Floor Judge',
    },
    SCOREKEEPER: {
        code: 6,
        label: 'Scorekeeper',
    },
    EVENT_MANAGER: {
        code: 7,
        label: 'Event Manager',
    },
    EVENT_STAFF: {
        code: 8,
        label: 'Event Staff',
    },
});

const __tsyToString = { value: function() { return ('[KTSLib:Enum:TournamentStyle #'+this.code+': "'+this.label+'"]'); } };
for (let v of Object.values(TournamentStyle)) Object.defineProperty(v, 'toString', __tsyToString);

const __tstToString = { value: function() { return ('[KTSLib:Enum:TournamentStructure #'+this.code+': "'+this.label+'"]'); } };
for (let v of Object.values(TournamentStructure)) Object.defineProperty(v, 'toString', __tstToString);

const __psToString = { value: function() { return ('[KTSLib:Enum:PlayerStructure #'+this.code+': "'+this.label+'"]'); } };
for (let v of Object.values(PlayerStructure)) Object.defineProperty(v, 'toString', __psToString);

const __etToString = { value: function() { return ('[KTSLib:Enum:EventType #'+this.code+': "'+this.label+'"]'); } };
for (let v of Object.values(EventType)) Object.defineProperty(v, 'toString', __etToString);

const __srToString = { value: function() { return ('[KTSLib:Enum:StaffRole #'+this.code+': "'+this.label+'"]'); } };
for (let v of Object.values(StaffRole)) Object.defineProperty(v, 'toString', __srToString);

const ExtractDOMChild = function(parent, selector, type)
{
    const child = parent.querySelector(':scope > '+selector);
    if (child === null) throw ('\''+selector+'\' not found');
    switch (type)
    {
        case 'element':
            return child;
        case 'text':
            return child.textContent;
        case 'int':
            const i = parseInt(child.textContent);
            if (isNaN(i)) throw ('\''+selector+'\': \''+child.textContent+'\' is not integral');
            return i;
        default:
            throw ('Invalid type \''+type+'\'');
    }
};

const __plToString = { value: function() { return ('[KTSLib:Player '+(this.kcgnId || '<temporary>')+': "'+this.name+'"]'); } };
const __entToString = { value: function() { return ('[KTSLib:TournEntrant '+this.id+': "'+this.name+'" ('+this.players.length+' players)]'); } };
const __rndToString = { value: function() { return ('[KTSLib:Round '+this.label+' ('+this.idx+')]'); } };
const __matToString = { value: function() { return ('[KTSLib:Match '+this.round+' Table '+this.table+']'); } };
const __idToString = { value: function() { return this.id; } };
const __playerCache = {};
const ParsePlayer = function(elm)
{
    const id = ExtractDOMChild(elm, 'ID', 'text');
    let cache = __playerCache[id]
    if (!cache)
        __playerCache[id] = (cache = []);
    const firstName = ExtractDOMChild(elm, 'FirstName', 'text') || null;
    const lastName = ExtractDOMChild(elm, 'LastName', 'text') || null;
    
    const existing = cache.find(elm => ((elm.firstName == firstName) && (elm.lastName == lastName)));
    if (existing)
        return existing;
    
    const player = {
        kcgnId: id.startsWith('9999') ? null : id,
        temporaryId: id.startsWith('9999') ? id : null,
        firstName,
        lastName,
        name: (firstName && lastName) ? (lastName+', '+firstName) : (lastName || firstName || ''),
    };
    Object.defineProperty(player, 'toString', __plToString);
    cache.push(player);
    return Object.freeze(player);
};

const Parse = function(txt)
{
    const kts = new DOMParser().parseFromString(txt, 'application/xml').documentElement;
    
    { // sanity check some values
        const sv = ExtractDOMChild(kts, 'SoftwareVersion', 'text');
        if (sv != '3.0.0.0')
            throw ('Unsupported KTS version \''+sv+'\' found');
    }
    
    const tournament = {};
    
    {
        tournament.id = { id: ExtractDOMChild(kts, 'ID', 'text') };
        tournament.id.isTemporary = tournament.id.id.startsWith('X');
        Object.defineProperty(tournament.id, 'toString', __idToString);

        tournament.name = ExtractDOMChild(kts, 'Name', 'text');
        tournament.isFinalized = (ExtractDOMChild(kts, 'Finalized', 'text') === 'True');
        tournament.firstTable = (ExtractDOMChild(kts, 'TableOffset', 'int') + 1);
    }

    {
        const styleCode = ExtractDOMChild(kts, 'TournamentStyleCode', 'int');
        const structureCode = ExtractDOMChild(kts, 'StructureCode', 'int');
        const eventTypeCode = ExtractDOMChild(kts, 'EventTypeCode', 'int');
        const playerStrucCode = ExtractDOMChild(kts, 'PlayerStructure', 'int');
        tournament.tournamentStyle = Object.values(TournamentStyle).find(e => (e.code == styleCode));
        tournament.tournamentStructure = Object.values(TournamentStructure).find(e => (e.code == structureCode));
        tournament.playerStructure = Object.values(PlayerStructure).find(e => (e.code == playerStrucCode));
        tournament.eventType = Object.values(EventType).find(e => (e.code == eventTypeCode));
        if (!tournament.tournamentStyle)
            throw ('Unknown tournament style #'+styleCode+' found');
        if (!tournament.tournamentStructure)
            throw ('Unknown tournament structure #'+structureCode+' found');
        if (!tournament.playerStructure)
            throw ('Unknown player structure #'+playerStrucCode+' found');
        if (!tournament.eventType)
            throw ('Unknown event type #'+eventTypeCode+' found');
    }
    
    {
        const date = ExtractDOMChild(kts, 'Date', 'text');
        const time = ExtractDOMChild(kts, 'Time', 'text');
        try {
            tournament.startTime = new Date(date+'T'+time+':00');
        } catch (e) {
            throw ('Invalid date/time \''+date+'\'/\''+time+'\': '+e);
        }
    }
    
    {
        const locationElm = ExtractDOMChild(kts, 'Location', 'element');
        const address2 = ExtractDOMChild(locationElm, 'Address2', 'text');
        tournament.location = {
            id: ExtractDOMChild(locationElm, 'Id', 'text') || null,
            name: ExtractDOMChild(locationElm, 'Name', 'text') || null,
            address: (ExtractDOMChild(locationElm, 'Address1', 'text') + (address2 ? ('\n'+address2) : '')) || null,
            city: ExtractDOMChild(locationElm, 'City', 'text') || null,
            state: ExtractDOMChild(locationElm, 'State', 'text') || null,
            country: ExtractDOMChild(locationElm, 'Country', 'text') || null,
            zipCode: ExtractDOMChild(locationElm, 'Zip', 'text') || null,
            phoneNumber: ExtractDOMChild(locationElm, 'Phone', 'text') || null,
            webSite: ExtractDOMChild(locationElm, 'WebSite', 'text') || null,
        };
    }
    
    {
        tournament.staff = { all: [], byRole: {} };
        for (const role of Object.values(StaffRole))
            tournament.staff.byRole[role] = [];

        for (const staffMember of kts.querySelectorAll(':scope > Staff > XmlStaffArray > XmlStaff'))
        {
            const roleCode = ExtractDOMChild(staffMember, 'XmlStaffPositionCode', 'int');
            const role = Object.values(StaffRole).find(e => (e.code == roleCode));
            if (!role)
                throw ('Unknown staff role #'+roleCode+' found');
            const player = ParsePlayer(ExtractDOMChild(staffMember, 'Player', 'element'));
            tournament.staff.all.push({ player, role });
            tournament.staff.byRole[role].push(player);
        }
        
        tournament.entrants = { all: [], active: [], dropped: [], byId: {}, byPlayer: {}, byKcgnId: {} };
        const isTeam = (tournament.playerStructure.teamSize > 1);
        for (const entry of kts.querySelectorAll(isTeam ? ':scope > TournamentPlayers > TournamentTeam' : ':scope > TournamentPlayers > TournPlayer'))
        {
            const dropRound = ExtractDOMChild(entry, 'DropRound', 'int');
            const dropReason = ExtractDOMChild(entry, 'DropReason', 'text');
            const pointsRaw = ExtractDOMChild(entry, 'Points', 'text');
            let points = parseInt('0'+pointsRaw.slice(0,-6));
            let tie1 = parseInt('0'+pointsRaw.slice(-6,-3));
            let tie2 = parseInt('0'+pointsRaw.slice(-3));
            if (tie1 === 999) tie1 = 1000;
            if (tie2 === 999) tie2 = 1000;
            const assignedSeat = ExtractDOMChild(entry, 'AssignedSeat', 'int');
            
            let entrant = {};

            if (isTeam)
            {
                const teamElm = ExtractDOMChild(entry, 'Team', 'element');
                entrant.id = ExtractDOMChild(teamElm, 'ID', 'text');
                entrant.name = ExtractDOMChild(teamElm, 'FirstName', 'text');
                entrant.players = new Array(tournament.playerStructure.teamSize);
                for (const playerElm of teamElm.querySelectorAll(':scope > PlayerList > Player'))
                {
                    const player = ParsePlayer(playerElm)
                    const pos = ExtractDOMChild(playerElm, 'TeamPosition', 'int');
                    if ((0 < pos) && (pos <= tournament.playerStructure.teamSize))
                        entrant.players[pos-1] = player;
                    else
                        throw ('Invalid position '+pos+' (should be in [1,'+tournament.playerStructure.teamSize+']) for '+player);
                }
            }
            else
            {
                const playerElm = ExtractDOMChild(entry, 'Player', 'element');
                const player = ParsePlayer(playerElm);
                entrant.id = ExtractDOMChild(playerElm, 'ID', 'text');
                entrant.name = player.name;
                entrant.players = [ player ];
            }
            entrant.rank = ExtractDOMChild(entry, 'Rank', 'int'),
            entrant.record = {
                swiss: { points, wins: 0, losses: 0, draws: 0, tiebreakers: [ (tie1/1000), (tie2/1000) ] },
                playoff: { wins: 0, losses: 0 },
            };
            entrant.dropped = ((dropReason !== 'Active') ? {
                round: dropRound,
                reason: dropReason,
            } : null);
            entrant.assignedSeating = ((assignedSeat >= 0) ? assignedSeat : null);
            entrant.matches = { all: [], swiss: [], playoff: [], };
            entrant.currentMatch = null;
            
            Object.defineProperty(entrant, 'toString', __entToString);
            
            if (tournament.entrants.byId[entrant.id])
                throw ('Duplicate tournament entrant '+entrant);
            tournament.entrants.byId[entrant.id] = entrant;
            for (const player of entrant.players)
            {
                if (tournament.entrants.byPlayer[player])
                    throw ('Player entered tournament twice '+player);
                tournament.entrants.byPlayer[player] = entrant;

                if (!player.kcgnId) continue;
                if (tournament.entrants.byKcgnId[player.kcgnId])
                    throw ('Duplicate KCGN ID in tournament: '+player.kcgnId);
                tournament.entrants.byKcgnId[player.kcgnId] = entrant;
            }
            tournament.entrants.all.push(entrant);
            if (entrant.dropped)
                tournament.entrants.dropped.push(entrant);
            else
                tournament.entrants.active.push(entrant);
        }
    }
    
    const currentRound = ExtractDOMChild(kts, 'CurrentRound', 'int');
    let firstPlayoffRound = ExtractDOMChild(kts, 'PlayoffRound', 'int') || null;
    if (tournament.tournamentStructure === TournamentStructure.SINGLE_ELIMINATION)
        firstPlayoffRound = 1;

    tournament.rounds = { all: [], swiss: [], playoff: [], byRoundIdx: {}, byPlayoffPlayers: {}, firstPlayoffRound };
    for (let roundIdx = 1; roundIdx <= currentRound; ++roundIdx)
    {
        const isPlayoff = (firstPlayoffRound && (firstPlayoffRound <= roundIdx));
        const round = {
            idx: roundIdx,
            isPlayoff,
            label: ('Round '+roundIdx),
            matches: { all: [], byTable: {}, byEntrant: {} },
        }
        Object.defineProperty(round, 'toString', __rndToString);
        tournament.rounds.all.push(round);
        tournament.rounds[isPlayoff ? 'playoff' : 'swiss'].push(round);
        tournament.rounds.byRoundIdx[roundIdx] = round;
    }
    if (currentRound > 0)
        tournament.rounds.current = tournament.rounds.byRoundIdx[currentRound];
    else
        tournament.rounds.current = null;
    
    tournament.matches = { all: [], complete: [], ongoing: [] };
    for (const matchElm of kts.querySelectorAll(':scope > Matches > TournMatch'))
    {
        const [player1Id, player2Id] = [...matchElm.querySelectorAll(':scope > Player')].map(e => e.textContent);
        const roundNumber = ExtractDOMChild(matchElm, 'Round', 'int');
        if (roundNumber === 0) /* initial seating NYI */
            continue;
        const status = ExtractDOMChild(matchElm, 'Status', 'text');
        const table = (ExtractDOMChild(matchElm, 'Table', 'int') + (tournament.firstTable - 1));
        const winner = ExtractDOMChild(matchElm, 'Winner', 'text');
        const isPlayoff = (ExtractDOMChild(matchElm, 'PlayoffMatch', 'text') === 'True');
        const playoffExpected = !!(firstPlayoffRound && (firstPlayoffRound <= roundNumber));
        if (isPlayoff !== playoffExpected)
            throw ('Round '+roundNumber+' Table '+table+' unexpected playoff status (expected '+playoffExpected+', got '+isPlayoff+')');
        
        const match = {
            round: tournament.rounds.byRoundIdx[roundNumber],
            table,
            entrants: [ null, null ],
            isComplete: (status !== 'Incomplete'),
            winner: null,
            opponentFor: {},
        };
        
        if (match.isComplete)
        {
            match.resultFor = {};
            if (!isPlayoff)
                match.pointsFor = {};
        }
        
        if (player1Id !== '0')
        {
            const entrant = tournament.entrants.byId[player1Id.padStart(10,'0')];
            if (!entrant)
                throw ('Invalid entrant with ID '+player1Id+' for round '+roundNumber+' table '+table);
            match.entrants[0] = entrant;
        }
        if (player2Id !== '0')
        {
            const entrant = tournament.entrants.byId[player2Id.padStart(10,'0')];
            if (!entrant)
                throw ('Invalid entrant with ID '+player2Id+' for round '+roundNumber+' table '+table);
            match.entrants[1] = entrant;
        }
        
        switch (status)
        {
            case 'Winner':
                if (winner !== '0')
                {
                    const entrant = tournament.entrants.byId[winner.padStart(10,'0')];
                    if (!entrant)
                        throw ('Invalid entrant with ID '+winner+' for round '+roundNumber+' table '+table);
                    match.winner = entrant;
                }
                
                for (const entrant of match.entrants)
                {
                    if (entrant)
                        match.resultFor[entrant] = ((entrant === match.winner) ? 'win' : 'loss');
                }
                
                break;
            case 'Draw':
                for (const entrant of match.entrants)
                {
                    if (entrant)
                        match.resultFor[entrant] = 'draw';
                }
                break;
            case 'DoubleLoss':
                for (const entrant of match.entrants)
                {
                    if (entrant)
                        match.resultFor[entrant] = 'loss';
                }
                break;
            case 'Incomplete':
                break;
            default:
                throw ('Unknown status "'+status+'" for round '+roundNumber+' table '+table);
        }
        
        if (match.isComplete && !isPlayoff)
        {
            for (const entrant of match.entrants)
            {
                if (!entrant)
                    continue;
                switch (match.resultFor[entrant])
                {
                    case 'win':
                        match.pointsFor[entrant] = 3;
                        break;
                    case 'draw':
                        match.pointsFor[entrant] = 1;
                        break;
                    case 'loss':
                        match.pointsFor[entrant] = 0;
                        break;
                }
            }
        }
        
        if (match.entrants[0])
            match.opponentFor[match.entrants[0]] = match.entrants[1]
        if (match.entrants[1])
            match.opponentFor[match.entrants[1]] = match.entrants[0]
        
        if (match.round.matches.byTable[table])
            throw ('Duplicate match on table '+table+' for round '+roundNumber);

        Object.defineProperty(match, 'toString', __matToString);
        
        tournament.matches.all.push(match);
        tournament.matches[match.isComplete ? 'complete' : 'ongoing'].push(match);
        
        match.round.matches.all.push(match);
        match.round.matches.byTable[table] = match;
        
        for (const entrant of match.entrants)
        {
            if (!entrant) continue;
            if (match.round.matches.byEntrant[entrant])
                throw ('Duplicate match for entrant '+entrant.name+' in round '+roundNumber);
            
            entrant.matches.all.push(match);
            entrant.matches[isPlayoff ? 'playoff' : 'swiss'].push(match);
            match.round.matches.byEntrant[entrant] = match;
            
            if (match.isComplete)
            {
                if (!isPlayoff)
                {
                    const points = match.pointsFor[entrant];
                    entrant.record.swiss[(points === 3) ? 'wins' : (points === 1) ? 'draws' : 'losses'] += 1;
                }
                else
                    entrant.record.playoff[(match.winner === entrant) ? 'wins' : 'losses'] += 1;
            }
            else
            {
                if (entrant.currentMatch)
                    throw ('Entrant '+entrant.name+' is involved in two incomplete matches: '+entrant.currentMatch+' and '+match);
                entrant.currentMatch = match;
            }
        }
    }
    
    for (const entrant of tournament.entrants.all)
    {
        entrant.record.all = {
            wins: (entrant.record.swiss.wins + entrant.record.playoff.wins),
            losses: (entrant.record.swiss.losses + entrant.record.playoff.losses),
            draws: entrant.record.swiss.draws,
        };
        
        if (entrant.dropped)
            entrant.dropped.round = tournament.rounds.byRoundIdx[entrant.dropped.round];
    }
    
    for (const round of tournament.rounds.playoff)
    {
        let nPlayers = 0;
        for (const match of round.matches.all)
            nPlayers += ((match.entrants[0] ? 1 : 0) + (match.entrants[1] ? 1 : 0));
        round.label = ('Top '+nPlayers);
        tournament.rounds.byPlayoffPlayers[nPlayers] = round;
    }
    
    return tournament;
};

return { Enum: Object.freeze({ TournamentStyle, TournamentStructure, PlayerStructure, EventType, StaffRole }), Parse };

})();
