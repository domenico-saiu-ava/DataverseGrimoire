---
logical: "msdyn_flowcardtype"
display: "flowcardtype"
entitySetName: "msdyn_flowcardtypes"
primaryId: "msdyn_flowcardtypeid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# flowcardtype

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_flowcardtype` |
| Display name | flowcardtype |
| Display (plural) | flowcardtypes |
| Schema name | `msdyn_flowcardtype` |
| Entity set (Web API) | `msdyn_flowcardtypes` |
| Primary id attribute | `msdyn_flowcardtypeid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_flowcardtypes?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_flowcardtypes(<guid>)
POST /api/data/v9.2/msdyn_flowcardtypes
PATCH /api/data/v9.2/msdyn_flowcardtypes(<guid>)
DELETE /api/data/v9.2/msdyn_flowcardtypes(<guid>)
```

## Attributes

Writable: **20** · Read-only: **10**

### Writable

`importsequencenumber`, `msdyn_actioncommand`, `msdyn_actionname`, `msdyn_cardname`, `msdyn_cardtypeid`, `msdyn_description`, `msdyn_flowcardtypeid`, `msdyn_flowname`, `msdyn_iscdsflow`, `msdyn_isdeleted`, `msdyn_name`, `msdyn_samplebody`, `msdyn_sampletitle`, `msdyn_workflowid`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_flowcardtype_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_flowcardtype_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_flowcardtype_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_flowcardtype_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_flowcardtype` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_flowcardtype` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_flowcardtype` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_flowcardtype` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `msdyn_cardtype_msdyn_flowcardtype_cardtypeid` | [cardtype](cardtype.md) | `msdyn_cardtypeid` | `msdyn_cardtypeid` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_flowcardtype_SyncErrors` | [msdyn_flowcardtype](msdyn_flowcardtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_flowcardtype` |
| `msdyn_flowcardtype_DuplicateMatchingRecord` | [msdyn_flowcardtype](msdyn_flowcardtype.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_flowcardtype` |
| `msdyn_flowcardtype_DuplicateBaseRecord` | [msdyn_flowcardtype](msdyn_flowcardtype.md) | `baserecordid` | `baserecordid_msdyn_flowcardtype` |
| `msdyn_flowcardtype_AsyncOperations` | [msdyn_flowcardtype](msdyn_flowcardtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_flowcardtype` |
| `msdyn_flowcardtype_MailboxTrackingFolders` | [msdyn_flowcardtype](msdyn_flowcardtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_flowcardtype` |
| `msdyn_flowcardtype_UserEntityInstanceDatas` | [msdyn_flowcardtype](msdyn_flowcardtype.md) | `objectid` | `objectid_msdyn_flowcardtype` |
| `msdyn_flowcardtype_ProcessSession` | [msdyn_flowcardtype](msdyn_flowcardtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_flowcardtype` |
| `msdyn_flowcardtype_BulkDeleteFailures` | [msdyn_flowcardtype](msdyn_flowcardtype.md) | `regardingobjectid` | `regardingobjectid_msdyn_flowcardtype` |
| `msdyn_flowcardtype_PrincipalObjectAttributeAccesses` | [msdyn_flowcardtype](msdyn_flowcardtype.md) | `objectid` | `objectid_msdyn_flowcardtype` |


## Source

Generated from [msdyn_flowcardtype (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_flowcardtype')) on 2026-05-07.