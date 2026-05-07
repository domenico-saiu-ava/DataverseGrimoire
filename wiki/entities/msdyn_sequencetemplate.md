---
logical: "msdyn_sequencetemplate"
display: "Sequence Template"
entitySetName: "msdyn_sequencetemplates"
primaryId: "msdyn_sequencetemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Sequence Template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sequencetemplate` |
| Display name | Sequence Template |
| Display (plural) | sequencetemplates |
| Schema name | `msdyn_sequencetemplate` |
| Entity set (Web API) | `msdyn_sequencetemplates` |
| Primary id attribute | `msdyn_sequencetemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sequencetemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sequencetemplates(<guid>)
POST /api/data/v9.2/msdyn_sequencetemplates
PATCH /api/data/v9.2/msdyn_sequencetemplates(<guid>)
DELETE /api/data/v9.2/msdyn_sequencetemplates(<guid>)
```

## Attributes

Writable: **21** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_cjodefinition`, `msdyn_cjodefinitionnew`, `msdyn_definition`, `msdyn_definitionnew`, `msdyn_description`, `msdyn_language`, `msdyn_maxduration`, `msdyn_maxstepcount`, `msdyn_maxstepcounttext`, `msdyn_name`, `msdyn_prefferedregardingentitydisplayname`, `msdyn_prefferedregardingEntityName`, `msdyn_sequencetemplateId`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_sequencetemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_sequencetemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sequencetemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sequencetemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sequencetemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_sequencetemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_sequencetemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_sequencetemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sequencetemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sequencetemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sequencetemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sequencetemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sequencetemplate.md) on 2026-05-06.