---
logical: "msdyn_sabackupdiagnostic"
display: "sabackupdiagnostic"
entitySetName: "msdyn_sabackupdiagnostics"
primaryId: "msdyn_sabackupdiagnosticid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# sabackupdiagnostic

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_sabackupdiagnostic` |
| Display name | sabackupdiagnostic |
| Display (plural) | sabackupdiagnostics |
| Schema name | `msdyn_sabackupdiagnostic` |
| Entity set (Web API) | `msdyn_sabackupdiagnostics` |
| Primary id attribute | `msdyn_sabackupdiagnosticid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_sabackupdiagnostics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_sabackupdiagnostics(<guid>)
POST /api/data/v9.2/msdyn_sabackupdiagnostics
PATCH /api/data/v9.2/msdyn_sabackupdiagnostics(<guid>)
DELETE /api/data/v9.2/msdyn_sabackupdiagnostics(<guid>)
```

## Attributes

Writable: **12** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_changedata`, `msdyn_diagnostictype`, `msdyn_name`, `msdyn_sabackupdiagnosticId`, `msdyn_target`, `msdyn_targetIdType`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sabackupdiagnostic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sabackupdiagnostic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sabackupdiagnostic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sabackupdiagnostic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_sabackupdiagnostic_account_msdyn_target` | [account](account.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sabackupdiagnostic_contact_msdyn_target` | [contact](contact.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sabackupdiagnostic_lead_msdyn_target` | [lead](lead.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sabackupdiagnostic_opportunity_msdyn_target` | [opportunity](opportunity.md) | `msdyn_target` | `msdyn_target` |
| `organization_msdyn_sabackupdiagnostic` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sabackupdiagnostic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sabackupdiagnostic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sabackupdiagnostic_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_sabackupdiagnostic_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_sabackupdiagnostic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sabackupdiagnostic_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_sabackupdiagnostic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_sabackupdiagnostic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_sabackupdiagnostic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_sabackupdiagnostic.md) on 2026-05-06.