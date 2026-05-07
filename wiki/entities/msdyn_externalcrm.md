---
logical: "msdyn_externalcrm"
display: "External CRM"
entitySetName: "msdyn_externalcrms"
primaryId: "msdyn_externalcrmid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# External CRM

External CRM - M365 Copilot Sales

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_externalcrm` |
| Display name | External CRM |
| Display (plural) | External CRMs |
| Schema name | `msdyn_externalcrm` |
| Entity set (Web API) | `msdyn_externalcrms` |
| Primary id attribute | `msdyn_externalcrmid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_externalcrms?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_externalcrms(<guid>)
POST /api/data/v9.2/msdyn_externalcrms
PATCH /api/data/v9.2/msdyn_externalcrms(<guid>)
DELETE /api/data/v9.2/msdyn_externalcrms(<guid>)
```

## Attributes

Writable: **13** · Read-only: **12**

### Writable

`ImportSequenceNumber`, `msdyn_crmenvironmenttype`, `msdyn_crmtype`, `msdyn_crmurl`, `msdyn_externalcrmId`, `msdyn_name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_externalcrm` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_externalcrm_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_externalcrm_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_externalcrm_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_externalcrm_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_externalcrm` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_externalcrm` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_externalcrm` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_externalcrm_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_externalcrm_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_externalcrm_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_externalcrm_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_externalcrm_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_externalcrm_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_externalcrm_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_externalcrm_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_msdyn_externalcrm_msdyn_externalrecord` | _n/a_ | `msdyn_externalcrm` | _n/a_ |


## Source

Generated from [msdyn_externalcrm.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_externalcrm.md) on 2026-05-06.