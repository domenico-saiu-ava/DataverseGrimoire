---
logical: "msdyn_copilotinteractiondata"
display: "Dati di interazione Copilot"
entitySetName: "msdyn_copilotinteractiondatas"
primaryId: "msdyn_copilotinteractiondataid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Dati di interazione Copilot

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_copilotinteractiondata` |
| Display name | Dati di interazione Copilot |
| Display (plural) | Dati di interazione Copilot |
| Schema name | `msdyn_copilotinteractiondata` |
| Entity set (Web API) | `msdyn_copilotinteractiondatas` |
| Primary id attribute | `msdyn_copilotinteractiondataid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_copilotinteractiondatas?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_copilotinteractiondatas(<guid>)
POST /api/data/v9.2/msdyn_copilotinteractiondatas
PATCH /api/data/v9.2/msdyn_copilotinteractiondatas(<guid>)
DELETE /api/data/v9.2/msdyn_copilotinteractiondatas(<guid>)
```

## Attributes

Writable: **10** · Read-only: **11**

### Writable

`importsequencenumber`, `msdyn_copilotinteractiondataid`, `msdyn_name`, `msdyn_verbatim`, `overriddencreatedon`, `ownerid`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `msdyn_interactiondata`, `owningbusinessunit`, `owningteam`, `owninguser`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_copilotinteractiondata_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_copilotinteractiondata_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_copilotinteractiondata_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_copilotinteractiondata_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_msdyn_copilotinteractiondata` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_msdyn_copilotinteractiondata` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_msdyn_copilotinteractiondata` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_msdyn_copilotinteractiondata` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `FileAttachment_msdyn_copilotinteractiondata_msdyn_interactiondata` | [fileattachment](fileattachment.md) | `msdyn_interactiondata` | `msdyn_interactiondata` |

### One-to-Many (11)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_copilotinteractiondata_SyncErrors` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractiondata` |
| `msdyn_copilotinteractiondata_DuplicateMatchingRecord` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_copilotinteractiondata` |
| `msdyn_copilotinteractiondata_DuplicateBaseRecord` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `baserecordid` | `baserecordid_msdyn_copilotinteractiondata` |
| `msdyn_copilotinteractiondata_AsyncOperations` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractiondata` |
| `msdyn_copilotinteractiondata_MailboxTrackingFolders` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractiondata` |
| `msdyn_copilotinteractiondata_UserEntityInstanceDatas` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `objectid` | `objectid_msdyn_copilotinteractiondata` |
| `msdyn_copilotinteractiondata_ProcessSession` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractiondata` |
| `msdyn_copilotinteractiondata_BulkDeleteFailures` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `regardingobjectid` | `regardingobjectid_msdyn_copilotinteractiondata` |
| `msdyn_copilotinteractiondata_PrincipalObjectAttributeAccesses` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `objectid` | `objectid_msdyn_copilotinteractiondata` |
| `msdyn_copilotinteractiondata_FileAttachments` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `objectid` | `objectid_msdyn_copilotinteractiondata` |
| `msdyn_msdyn_copilotinteractiondata_msdyn_copilotinteraction_interactiondataid` | [msdyn_copilotinteractiondata](msdyn_copilotinteractiondata.md) | `msdyn_interactiondataid` | `msdyn_interactiondataid` |


## Source

Generated from [msdyn_copilotinteractiondata (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_copilotinteractiondata')) on 2026-05-07.