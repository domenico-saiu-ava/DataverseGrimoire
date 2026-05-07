---
logical: "msdyn_channelmessagecontextpart"
display: "Parte di contesto sul messaggio di canale"
entitySetName: "msdyn_channelmessagecontextparts"
primaryId: "msdyn_channelmessagecontextpartid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Parte di contesto sul messaggio di canale

Contesto sul messaggio di canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelmessagecontextpart` |
| Display name | Parte di contesto sul messaggio di canale |
| Display (plural) | Parti di contesto sul messaggio di canale |
| Schema name | `msdyn_ChannelMessageContextPart` |
| Entity set (Web API) | `msdyn_channelmessagecontextparts` |
| Primary id attribute | `msdyn_channelmessagecontextpartid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelmessagecontextparts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelmessagecontextparts(<guid>)
POST /api/data/v9.2/msdyn_channelmessagecontextparts
PATCH /api/data/v9.2/msdyn_channelmessagecontextparts(<guid>)
DELETE /api/data/v9.2/msdyn_channelmessagecontextparts(<guid>)
```

## Attributes

Writable: **17** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_channeldefinitionid`, `msdyn_channelmessagecontextpartid`, `msdyn_description`, `msdyn_displayname`, `msdyn_entityname`, `msdyn_isrequired`, `msdyn_maxlength`, `msdyn_name`, `msdyn_order`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_channelmessagecontextpart_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelmessagecontextpart_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelmessagecontextpart_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelmessagecontextpart_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channelmessagecontextpart` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channelmessagecontextpart` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channelmessagecontextpart` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channelmessagecontextpart` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_channelmessagecontextpart_ChannelDe` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelmessagecontextpart_SyncErrors` | [msdyn_channelmessagecontextpart](msdyn_channelmessagecontextpart.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessagecontextpart` |
| `msdyn_channelmessagecontextpart_DuplicateMatchingRecord` | [msdyn_channelmessagecontextpart](msdyn_channelmessagecontextpart.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channelmessagecontextpart` |
| `msdyn_channelmessagecontextpart_DuplicateBaseRecord` | [msdyn_channelmessagecontextpart](msdyn_channelmessagecontextpart.md) | `baserecordid` | `baserecordid_msdyn_channelmessagecontextpart` |
| `msdyn_channelmessagecontextpart_AsyncOperations` | [msdyn_channelmessagecontextpart](msdyn_channelmessagecontextpart.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessagecontextpart` |
| `msdyn_channelmessagecontextpart_MailboxTrackingFolders` | [msdyn_channelmessagecontextpart](msdyn_channelmessagecontextpart.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessagecontextpart` |
| `msdyn_channelmessagecontextpart_UserEntityInstanceDatas` | [msdyn_channelmessagecontextpart](msdyn_channelmessagecontextpart.md) | `objectid` | `objectid_msdyn_channelmessagecontextpart` |
| `msdyn_channelmessagecontextpart_ProcessSession` | [msdyn_channelmessagecontextpart](msdyn_channelmessagecontextpart.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessagecontextpart` |
| `msdyn_channelmessagecontextpart_BulkDeleteFailures` | [msdyn_channelmessagecontextpart](msdyn_channelmessagecontextpart.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessagecontextpart` |
| `msdyn_channelmessagecontextpart_PrincipalObjectAttributeAccesses` | [msdyn_channelmessagecontextpart](msdyn_channelmessagecontextpart.md) | `objectid` | `objectid_msdyn_channelmessagecontextpart` |


## Source

Generated from [msdyn_channelmessagecontextpart (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelmessagecontextpart')) on 2026-05-07.