---
logical: "msdyn_salesroutingdiagnostic"
display: "salesroutingdiagnostic"
entitySetName: "msdyn_salesroutingdiagnostics"
primaryId: "msdyn_salesroutingdiagnosticid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# salesroutingdiagnostic

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesroutingdiagnostic` |
| Display name | salesroutingdiagnostic |
| Display (plural) | salesroutingdiagnostics |
| Schema name | `msdyn_salesroutingdiagnostic` |
| Entity set (Web API) | `msdyn_salesroutingdiagnostics` |
| Primary id attribute | `msdyn_salesroutingdiagnosticid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesroutingdiagnostics?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_salesroutingdiagnostics(<guid>)
POST /api/data/v9.2/msdyn_salesroutingdiagnostics
PATCH /api/data/v9.2/msdyn_salesroutingdiagnostics(<guid>)
DELETE /api/data/v9.2/msdyn_salesroutingdiagnostics(<guid>)
```

## Attributes

Writable: **19** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_connectsequencehistory`, `msdyn_latestconnectsequence`, `msdyn_latestrouting`, `msdyn_latestsegmentation`, `msdyn_name`, `msdyn_objecttype`, `msdyn_recordid`, `msdyn_routinghistory`, `msdyn_salesroutingdiagnosticId`, `msdyn_segmentationhistory`, `msdyn_segmentmoved`, `msdyn_target`, `msdyn_targetIdType`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesroutingdiagnostic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesroutingdiagnostic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesroutingdiagnostic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesroutingdiagnostic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_salesroutingdiagnostic_account_msdyn_target` | [account](account.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_salesroutingdiagnostic_contact_msdyn_target` | [contact](contact.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_salesroutingdiagnostic_lead_msdyn_target` | [lead](lead.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_salesroutingdiagnostic_opportunity_msdyn_target` | [opportunity](opportunity.md) | `msdyn_target` | `msdyn_target` |
| `organization_msdyn_salesroutingdiagnostic` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesroutingdiagnostic_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesroutingdiagnostic_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesroutingdiagnostic_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesroutingdiagnostic_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesroutingdiagnostic_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesroutingdiagnostic_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesroutingdiagnostic_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesroutingdiagnostic_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesroutingdiagnostic.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesroutingdiagnostic.md) on 2026-05-06.