---
logical: "msdyn_salesroutingdiagnostic"
display: "salesroutingdiagnostic"
entitySetName: "msdyn_salesroutingdiagnostics"
primaryId: "msdyn_salesroutingdiagnosticid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
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

Writable: **18** · Read-only: **8**

### Writable

`importsequencenumber`, `msdyn_connectsequencehistory`, `msdyn_latestconnectsequence`, `msdyn_latestrouting`, `msdyn_latestsegmentation`, `msdyn_name`, `msdyn_objecttype`, `msdyn_recordid`, `msdyn_routinghistory`, `msdyn_salesroutingdiagnosticid`, `msdyn_segmentationhistory`, `msdyn_segmentmoved`, `msdyn_target`, `overriddencreatedon`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `utcconversiontimezonecode`

### Read-only

`createdby`, `createdon`, `createdonbehalfby`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `organizationid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_salesroutingdiagnostic_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesroutingdiagnostic_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesroutingdiagnostic_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesroutingdiagnostic_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `organization_msdyn_salesroutingdiagnostic` | [organization](organization.md) | `organizationid` | `organizationid` |
| `msdyn_salesroutingdiagnostic_lead_msdyn_target` | [lead](lead.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_salesroutingdiagnostic_opportunity_msdyn_target` | [opportunity](opportunity.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_salesroutingdiagnostic_account_msdyn_target` | [account](account.md) | `msdyn_target` | `msdyn_target` |
| `msdyn_salesroutingdiagnostic_contact_msdyn_target` | [contact](contact.md) | `msdyn_target` | `msdyn_target` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesroutingdiagnostic_SyncErrors` | [msdyn_salesroutingdiagnostic](msdyn_salesroutingdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesroutingdiagnostic` |
| `msdyn_salesroutingdiagnostic_DuplicateMatchingRecord` | [msdyn_salesroutingdiagnostic](msdyn_salesroutingdiagnostic.md) | `duplicaterecordid` | `duplicaterecordid_msdyn_salesroutingdiagnostic` |
| `msdyn_salesroutingdiagnostic_DuplicateBaseRecord` | [msdyn_salesroutingdiagnostic](msdyn_salesroutingdiagnostic.md) | `baserecordid` | `baserecordid_msdyn_salesroutingdiagnostic` |
| `msdyn_salesroutingdiagnostic_AsyncOperations` | [msdyn_salesroutingdiagnostic](msdyn_salesroutingdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesroutingdiagnostic` |
| `msdyn_salesroutingdiagnostic_MailboxTrackingFolders` | [msdyn_salesroutingdiagnostic](msdyn_salesroutingdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesroutingdiagnostic` |
| `msdyn_salesroutingdiagnostic_UserEntityInstanceDatas` | [msdyn_salesroutingdiagnostic](msdyn_salesroutingdiagnostic.md) | `objectid` | `objectid_msdyn_salesroutingdiagnostic` |
| `msdyn_salesroutingdiagnostic_ProcessSession` | [msdyn_salesroutingdiagnostic](msdyn_salesroutingdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesroutingdiagnostic` |
| `msdyn_salesroutingdiagnostic_BulkDeleteFailures` | [msdyn_salesroutingdiagnostic](msdyn_salesroutingdiagnostic.md) | `regardingobjectid` | `regardingobjectid_msdyn_salesroutingdiagnostic` |
| `msdyn_salesroutingdiagnostic_PrincipalObjectAttributeAccesses` | [msdyn_salesroutingdiagnostic](msdyn_salesroutingdiagnostic.md) | `objectid` | `objectid_msdyn_salesroutingdiagnostic` |


## Source

Generated from [msdyn_salesroutingdiagnostic (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='msdyn_salesroutingdiagnostic')) on 2026-05-07.