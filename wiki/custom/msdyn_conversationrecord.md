---
logical: "msdyn_conversationrecord"
display: "Record di conversazione"
entitySetName: "msdyn_conversationrecords"
primaryId: "msdyn_conversationrecordid"
primaryName: "msdyn_conversationid"
tableType: "Elastic"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Record di conversazione

Archivia le trascrizioni complete delle conversazioni per i canali chat e voce, insieme a metadati contestuali avanzati. Ciò include l'analisi della valutazione del cliente, lo stato di escalation (ad esempio, se la conversazione è stata passata a un agente umano), i tempi di attesa del cliente, il tipo di canale, i dettagli del flusso di lavoro associato e gli attributi della conversazione

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_conversationrecord` |
| Display name | Record di conversazione |
| Display (plural) | Record di conversazione |
| Schema name | `msdyn_conversationrecord` |
| Entity set (Web API) | `msdyn_conversationrecords` |
| Primary id attribute | `msdyn_conversationrecordid` |
| Primary name attribute | `msdyn_conversationid` |
| Table type | Elastic |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_conversationrecords?$select=msdyn_conversationid&$top=10
GET /api/data/v9.2/msdyn_conversationrecords(<guid>)
POST /api/data/v9.2/msdyn_conversationrecords
PATCH /api/data/v9.2/msdyn_conversationrecords(<guid>)
DELETE /api/data/v9.2/msdyn_conversationrecords(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_channelinstanceid`, `msdyn_channeltype`, `msdyn_conversationclosedon`, `msdyn_conversationcreatedon`, `msdyn_conversationid`, `msdyn_conversationrecordid`, `msdyn_conversationstate`, `msdyn_conversationtitle`, `msdyn_conversationtranscript`, `msdyn_customerfirstwaittime`, `msdyn_customerid`, `msdyn_customerlocale`, `msdyn_customersentiment`, `msdyn_isescalatedtocustomerservicerepresentative`, `msdyn_workstream`, `overriddencreatedon`, `ownerid`, `partitionid`, `ttlinseconds`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_conversationrecord_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_conversationrecord_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_conversationrecord_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_conversationrecord_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_conversationrecord` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_conversationrecord` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_conversationrecord` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_conversationrecord` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |



## Source

Generated from [msdyn_conversationrecord (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_conversationrecord')) on 2026-05-07.