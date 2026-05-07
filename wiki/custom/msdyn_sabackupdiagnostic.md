---
logical: "msdyn_sabackupdiagnostic"
display: "sabackupdiagnostic"
entitySetName: "msdyn_sabackupdiagnostics"
primaryId: "msdyn_sabackupdiagnosticid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **11** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_changedata`, `msdyn_diagnostictype`, `msdyn_name`, `msdyn_sabackupdiagnosticid`, `msdyn_target`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_sabackupdiagnostic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_sabackupdiagnostic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_sabackupdiagnostic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_sabackupdiagnostic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_sabackupdiagnostic` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_sabackupdiagnostic_lead_msdyn_target` | [lead](lead.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sabackupdiagnostic_opportunity_msdyn_target` | [opportunity](opportunity.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sabackupdiagnostic_contact_msdyn_target` | [contact](contact.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_sabackupdiagnostic_account_msdyn_target` | [account](account.md) | `msdyn_target` | `msdyn_target` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_sabackupdiagnostic_SyncErrors` | [msdyn_sabackupdiagnostic](msdyn_sabackupdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_sabackupdiagnostic` |
| `msdyn_sabackupdiagnostic_DuplicateMatchingRecord` | [msdyn_sabackupdiagnostic](msdyn_sabackupdiagnostic.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_sabackupdiagnostic` |
| `msdyn_sabackupdiagnostic_DuplicateBaseRecord` | [msdyn_sabackupdiagnostic](msdyn_sabackupdiagnostic.md) | `baserecordid` | `baserecordid_msdyn_sabackupdiagnostic` |
| `msdyn_sabackupdiagnostic_AsyncOperations` | [msdyn_sabackupdiagnostic](msdyn_sabackupdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_sabackupdiagnostic` |
| `msdyn_sabackupdiagnostic_MailboxTrackingFolders` | [msdyn_sabackupdiagnostic](msdyn_sabackupdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_sabackupdiagnostic` |
| `msdyn_sabackupdiagnostic_UserEntityInstanceDatas` | [msdyn_sabackupdiagnostic](msdyn_sabackupdiagnostic.md) | `objectid` | `objectid_msdyn_sabackupdiagnostic` |
| `msdyn_sabackupdiagnostic_ProcessSession` | [msdyn_sabackupdiagnostic](msdyn_sabackupdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_sabackupdiagnostic` |
| `msdyn_sabackupdiagnostic_BulkDeleteFailures` | [msdyn_sabackupdiagnostic](msdyn_sabackupdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_sabackupdiagnostic` |
| `msdyn_sabackupdiagnostic_PrincipalObjectAttributeAccesses` | [msdyn_sabackupdiagnostic](msdyn_sabackupdiagnostic.md) | `objectid` | `objectid_msdyn_sabackupdiagnostic` |


## Source

Generated from [msdyn_sabackupdiagnostic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_sabackupdiagnostic')) on 2026-05-07.