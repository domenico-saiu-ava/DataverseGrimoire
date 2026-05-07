---
logical: "msdyn_readtrackingenabledinfo"
display: "Read tracking enabled information"
entitySetName: "msdyn_readtrackingenabledinfos"
primaryId: "msdyn_readtrackingenabledinfoid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Read tracking enabled information

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_readtrackingenabledinfo` |
| Display name | Read tracking enabled information |
| Display (plural) | Read tracking enabled information |
| Schema name | `msdyn_readtrackingenabledinfo` |
| Entity set (Web API) | `msdyn_readtrackingenabledinfos` |
| Primary id attribute | `msdyn_readtrackingenabledinfoid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_readtrackingenabledinfos?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_readtrackingenabledinfos(<guid>)
POST /api/data/v9.2/msdyn_readtrackingenabledinfos
PATCH /api/data/v9.2/msdyn_readtrackingenabledinfos(<guid>)
DELETE /api/data/v9.2/msdyn_readtrackingenabledinfos(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_enabledtimestamp`, `msdyn_entity`, `msdyn_isenabled`, `msdyn_name`, `msdyn_readtrackingenabledinfoId`, `msdyn_userid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_readtrackingenabledinfo_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_readtrackingenabledinfo_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_readtrackingenabledinfo_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_readtrackingenabledinfo_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_readtrackingenabledinfo` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_readtrackingenabledinfo_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_readtrackingenabledinfo_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_readtrackingenabledinfo_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_readtrackingenabledinfo_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_readtrackingenabledinfo_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_readtrackingenabledinfo_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_readtrackingenabledinfo.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_readtrackingenabledinfo.md) on 2026-05-06.