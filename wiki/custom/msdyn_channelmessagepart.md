---
logical: "msdyn_channelmessagepart"
display: "Parte del messaggio di canale"
entitySetName: "msdyn_channelmessageparts"
primaryId: "msdyn_channelmessagepartid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Parte del messaggio di canale

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_channelmessagepart` |
| Display name | Parte del messaggio di canale |
| Display (plural) | Parti del messaggio di canale |
| Schema name | `msdyn_ChannelMessagePart` |
| Entity set (Web API) | `msdyn_channelmessageparts` |
| Primary id attribute | `msdyn_channelmessagepartid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_channelmessageparts?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_channelmessageparts(<guid>)
POST /api/data/v9.2/msdyn_channelmessageparts
PATCH /api/data/v9.2/msdyn_channelmessageparts(<guid>)
DELETE /api/data/v9.2/msdyn_channelmessageparts(<guid>)
```

## Attributes

Writable: **22** · Read-only: **16**

### Writable

`importsequencenumber`, `iscustomizable`, `msdyn_channeldefinitionid`, `msdyn_channelmessagepartid`, `msdyn_description`, `msdyn_displayname`, `msdyn_entityname`, `msdyn_entityviewid`, `msdyn_isrequired`, `msdyn_maxlength`, `msdyn_maxvalue`, `msdyn_minvalue`, `msdyn_name`, `msdyn_options`, `msdyn_order`, `msdyn_type`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`componentidunique`, `componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_channelmessagepart_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_channelmessagepart_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_channelmessagepart_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_channelmessagepart_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_channelmessagepart` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_channelmessagepart` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_channelmessagepart` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_channelmessagepart` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_msdyn_channelmessagepart_ChannelDefinition_msdyn` | [msdyn_channeldefinition](msdyn_channeldefinition.md) | `msdyn_channeldefinitionid` | `msdyn_ChannelDefinitionId` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_channelmessagepart_SyncErrors` | [msdyn_channelmessagepart](msdyn_channelmessagepart.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessagepart` |
| `msdyn_channelmessagepart_DuplicateMatchingRecord` | [msdyn_channelmessagepart](msdyn_channelmessagepart.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_channelmessagepart` |
| `msdyn_channelmessagepart_DuplicateBaseRecord` | [msdyn_channelmessagepart](msdyn_channelmessagepart.md) | `baserecordid` | `baserecordid_msdyn_channelmessagepart` |
| `msdyn_channelmessagepart_AsyncOperations` | [msdyn_channelmessagepart](msdyn_channelmessagepart.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessagepart` |
| `msdyn_channelmessagepart_MailboxTrackingFolders` | [msdyn_channelmessagepart](msdyn_channelmessagepart.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessagepart` |
| `msdyn_channelmessagepart_UserEntityInstanceDatas` | [msdyn_channelmessagepart](msdyn_channelmessagepart.md) | `objectid` | `objectid_msdyn_channelmessagepart` |
| `msdyn_channelmessagepart_ProcessSession` | [msdyn_channelmessagepart](msdyn_channelmessagepart.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessagepart` |
| `msdyn_channelmessagepart_BulkDeleteFailures` | [msdyn_channelmessagepart](msdyn_channelmessagepart.md) | `regardingobjectid` | `regardingobjectid_msdyn_channelmessagepart` |
| `msdyn_channelmessagepart_PrincipalObjectAttributeAccesses` | [msdyn_channelmessagepart](msdyn_channelmessagepart.md) | `objectid` | `objectid_msdyn_channelmessagepart` |


## Source

Generated from [msdyn_channelmessagepart (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_channelmessagepart')) on 2026-05-07.