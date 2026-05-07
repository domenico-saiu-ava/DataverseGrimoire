---
logical: "msdyn_ocflaggedspam"
display: "Flagged spam"
entitySetName: "msdyn_ocflaggedspams"
primaryId: "msdyn_ocflaggedspamid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Flagged spam

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_ocflaggedspam` |
| Display name | Flagged spam |
| Display (plural) | Flagged spams |
| Schema name | `msdyn_ocflaggedspam` |
| Entity set (Web API) | `msdyn_ocflaggedspams` |
| Primary id attribute | `msdyn_ocflaggedspamid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_ocflaggedspams?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_ocflaggedspams(<guid>)
POST /api/data/v9.2/msdyn_ocflaggedspams
PATCH /api/data/v9.2/msdyn_ocflaggedspams(<guid>)
DELETE /api/data/v9.2/msdyn_ocflaggedspams(<guid>)
```

## Attributes

Writable: **15** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_flaggedby`, `msdyn_flaggedstatus`, `msdyn_name`, `msdyn_ocflaggedspamId`, `msdyn_ruleid`, `msdyn_spamtype`, `msdyn_spamvalue`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_ocflaggedspam` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_ocflaggedspam_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_ocflaggedspam_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_ocflaggedspam_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_ocflaggedspam_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_ocautoblockrule_msdyn_ocflaggedspam_ruleid` | [msdyn_ocautoblockrule](msdyn_ocautoblockrule.md) | `msdyn_ruleid` | `msdyn_ruleid` |
| `owner_msdyn_ocflaggedspam` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_ocflaggedspam` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_ocflaggedspam` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_ocflaggedspam_Annotations` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocflaggedspam_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocflaggedspam_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocflaggedspam_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_ocflaggedspam_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_ocflaggedspam_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocflaggedspam_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_ocflaggedspam_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_ocflaggedspam_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_ocflaggedspam.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_ocflaggedspam.md) on 2026-05-06.