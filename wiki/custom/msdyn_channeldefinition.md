---
logical: "msdyn_channeldefinition"
display: "Definizione canale"
entitySetName: "msdyn_channeldefinitions"
primaryId: "msdyn_channeldefinitionid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Definizione canale

Archivia i dettagli relativi a una definizione canale.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channeldefinition` |
| Display name | Definizione canale |
| Display (plural) | Definizioni canali |
| Schema name | `msdyn_ChannelDefinition` |
| Entity set (Web API) | `msdyn_channeldefinitions` |
| Primary id attribute | `msdyn_channeldefinitionid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channeldefinitions?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channeldefinitions(<guid>)
POST /api/data/v9.2/msdyn_channeldefinitions
PATCH /api/data/v9.2/msdyn_channeldefinitions(<guid>)
DELETE /api/data/v9.2/msdyn_channeldefinitions(<guid>)
```

## Attributes

Writable: **28** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_channeldefinitionaccountexternalentity`, `msdyn_channeldefinitionaccountexternalformid`, `msdyn_channeldefinitionexternalentity`, `msdyn_channeldefinitionexternalformid`, `msdyn_channeldefinitionid`, `msdyn_channeltype`, `msdyn_description`, `msdyn_displayname`, `msdyn_hasdeliveryreceipt`, `msdyn_hasinbound`, `msdyn_instanceregistrationendpointurltemplate`, `msdyn_messageformid`, `msdyn_name`, `msdyn_outboundbatchendpointurltemplate`, `msdyn_outboundendpointurltemplate`, `msdyn_specialconsentlabel`, `msdyn_specialconsentrequired`, `msdyn_supportsaccount`, `msdyn_supportsattachment`, `msdyn_supportsbinary`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_channeldefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channeldefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channeldefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channeldefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channeldefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channeldefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channeldefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channeldefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |

### One-to-Many (15)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channeldefinition_SyncErrors` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinition` |
| `msdyn_channeldefinition_DuplicateMatchingRecord` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channeldefinition` |
| `msdyn_channeldefinition_DuplicateBaseRecord` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `baserecordid` | `baserecordid_msdyn_channeldefinition` |
| `msdyn_channeldefinition_AsyncOperations` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinition` |
| `msdyn_channeldefinition_MailboxTrackingFolders` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinition` |
| `msdyn_channeldefinition_UserEntityInstanceDatas` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `objectid` | `objectid_msdyn_channeldefinition` |
| `msdyn_channeldefinition_ProcessSession` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinition` |
| `msdyn_channeldefinition_BulkDeleteFailures` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `regardingobjectid` | `regardingobjectid_msdyn_channeldefinition` |
| `msdyn_channeldefinition_PrincipalObjectAttributeAccesses` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `objectid` | `objectid_msdyn_channeldefinition` |
| `msdyn_msdyn_channeldefinitionconsent_ChannelDefinitionId` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_channeldefinitionid` |
| `msdyn_msdyn_channeldefinitionlocale_ChannelDefi` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |
| `msdyn_msdyn_channelinstance_ChannelDefinition_m` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |
| `msdyn_msdyn_channelinstanceaccount_ChannelDefin` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |
| `msdyn_msdyn_channelmessagecontextpart_ChannelDe` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |
| `msdyn_msdyn_channelmessagepart_ChannelDefinition_msdyn` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |


## Source

Generated from [msdyn_channeldefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channeldefinition')) on 2026-05-07.